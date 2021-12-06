import React, { ReactElement, useState } from 'react';
import Action from '../types/Action';
import Condition from '../types/Condition';
import ActionButton from './ActionButton';
import Controller from '../types/Controller';
import Footer from './Footer';
import Menu from './Menu';
import GameState from '../types/GameState';
import Scene from '../types/Scene';
import './App.css';
import { load as loadSavedGame } from '../saveFile';

type Props = {
  scenes: Scene[],
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
const App = ({ scenes, initialState }: Props) => {
  const [sceneId, setSceneId] = useState(initialState.sceneId);
  const [inventory, setInventory] = useState(initialState.inventory);
  const [visited, setVisited] = useState([] as string[]);
  const [lightbox, setLightbox] = useState(null as (ReactElement | null));
  const [savedGame, setSavedGame] = useState(loadSavedGame());
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

  return (
    <div className="app">
      <Menu
        title={scene.name}
        description={description || ''}
        actions={actionButtons}
      />
      <Footer controller={controller} />
      {lightbox}
    </div>
  );
};

export default App;
