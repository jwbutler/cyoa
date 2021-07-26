import React, { ReactElement, useState } from 'react';
import Action from '../types/Action';
import Condition from '../types/Condition';
import ActionButton from './ActionButton';
import Controller from '../types/Controller';
import Footer from './Footer';
import Menu from './Menu';
import GameState from '../types/GameState';
import Scene from '../types/Scene';
import { load as loadSavedGame } from '../saveFile';
import styles from './Game.module.css';

type Props = {
  scenes: Scene[],
  setScenes: (scenes: Scene[]) => void,
  initialState: GameState
}

const toMap = <T, >(items: T[], mapper: (item: T) => string): { [key: string]: T } => {
  const map: { [key: string]: T } = {};
  items.forEach(item => {
    map[mapper(item)] = item;
  });
  return map;
};

/**
 * Entry point for the game engine.  There should be no game-specific logic from this point on; all behavior
 * is driven by the data passed as props.
 */
const Game = ({ scenes, setScenes, initialState }: Props) => {
  const [sceneId, setSceneId] = useState(initialState.sceneId);
  const [inventory, setInventory] = useState(initialState.inventory);
  const [visited, setVisited] = useState([] as string[]);
  const [lightbox, setLightbox] = useState(null as (ReactElement | null));
  const [savedGame, setSavedGame] = useState(loadSavedGame());
  const scenesById: { [id: string]: Scene } = toMap(scenes, scene => scene.id);

  const controller: Controller = Controller.create({
    initialState,
    sceneId, setSceneId,
    inventory, setInventory,
    visited, setVisited,
    lightbox, setLightbox,
    savedGame, setSavedGame
  });

  const scene = scenesById[sceneId];
  if (!scene) {
    return null;
  }

  if (!visited.includes(sceneId)) {
    visited.push(sceneId);
  }

  let { description } = scene;
  const actions = [...scene.actions || []];
  scene.conditions?.forEach(condition => {
    if (Condition.evaluate(condition, controller)) {
      condition?.actions?.forEach(action => actions.push(action));
      // TODO - this assumes conditions are mutually exclusive
      description = description || condition.description;
    }
  });

  Action.sort(actions);

  return (
    <div className={styles.game}>
      <Menu
        title={scene.name}
        description={description}
      >
        {actions.map((action, index) => (
          <ActionButton
            action={action}
            controller={controller}
            key={`${action.text}_${index}`}
          />
        ))}
      </Menu>
      <Footer
        controller={controller}
        scenes={scenes}
        setScenes={setScenes}
      />
      {lightbox}
    </div>
  );
};

export default Game;
