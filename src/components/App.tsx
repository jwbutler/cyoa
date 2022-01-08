import React, { ReactElement, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Action from '../types/Action';
import Condition from '../types/Condition';
import ActionButton from './ActionButton';
import Controller from '../types/Controller';
import Definition from './Definition';
import Footer from './Footer';
import Menu from './Menu';
import GameState from '../types/GameState';
import Scene from '../types/Scene';
import styles from './App.module.css';
import { load as loadSavedGame } from '../saveFile';

type Props = {
  scenes: Scene[],
  definitions: Record<string, string>,
  initialState: GameState
}

const toMap = <T, >(items: T[], mapper: (item: T) => string): Record<string, T> => {
  const map: Record<string, T> = {};
  for (const item of items) {
    map[mapper(item)] = item;
  }
  return map;
};

/**
 * Entry point for the game engine.  There should be no game-specific logic from this point on; all behavior
 * is driven by the data passed as props.
 */
const App = ({ scenes, definitions, initialState }: Props) => {
  const [sceneId, setSceneId] = useState(initialState.sceneId);
  const [inventory, setInventory] = useState(initialState.inventory);
  const [visited, setVisited] = useState([] as string[]);
  const [lightbox, setLightbox] = useState(null as (ReactElement | null));
  const [savedGame, setSavedGame] = useState(loadSavedGame());
  const location = useLocation();
  const scenesById: Record<string, Scene> = toMap(scenes, scene => scene.id);

  const controller: Controller = Controller.create({
    initialState,
    sceneId, setSceneId,
    inventory, setInventory,
    visited, setVisited,
    lightbox, setLightbox,
    savedGame, setSavedGame
  });

  const scene = scenesById[sceneId];

  if (!visited.includes(sceneId)) {
    visited.push(sceneId);
  }

  let { description } = scene;
  const actions = [...scene.actions || []];
  for (const condition of scene.conditions || []) {
    if (Condition.evaluate(condition, controller)) {
      for (const action of condition?.actions || []) {
        actions.push(action);
      }
      // TODO - this assumes conditions are mutually exclusive
      if (condition.description) {
        description = description || condition.description;
      }
    }
  }

  Action.sort(actions);
  const actionButtons = actions.map((action, index) => (
    <ActionButton
      action={action}
      controller={controller}
      key={`${action.text}_${index}`}
    />
  ));

  const term = (location.hash && definitions[location.hash.substring(1)]) ? location.hash.substring(1) : null;
  const definition = (term) ? definitions[term] : null;

  return (
    <div className={styles['app']}>
      <div className={styles['app-content']}>
        <Menu
          title={scene.name}
          description={description || ''}
          actions={actionButtons}
        />
        {term && definition && (
          <Definition
            term={term}
            definition={definition}
          />
        )}
      </div>
      <Footer controller={controller} />
      {lightbox}
    </div>
  );
};

export default App;
