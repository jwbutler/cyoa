import React, { ReactElement, useState } from 'react';
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
  scenes: { [name: string]: Scene },
  initialState: GameState
}

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

  const controller: Controller = Controller.create({
    initialState,
    sceneId, setSceneId,
    inventory, setInventory,
    visited, setVisited,
    lightbox, setLightbox,
    savedGame, setSavedGame
  });

  const scene = scenes[sceneId];
  let { description } = scene;
  const actions = [...scene.actions || []];
  scene.conditions?.forEach(condition => {
    if (Condition.evaluate(condition, controller)) {
      condition?.actions?.forEach(action => actions.push(action));
      // TODO - this assumes conditions are mutually exclusive
      description = description || condition.description;
    }
  });

  return (
    <div className="app">
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
      <Footer controller={controller} />
      {lightbox}
    </div>
  );
}

export default App;
