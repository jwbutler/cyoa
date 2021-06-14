import React, { ReactElement, useState } from 'react';
import ActionButton from './ActionButton';
import Controller from './Controller';
import Footer from './Footer';
import Menu from './Menu';
import GameState from './GameState';
import type { Scene } from './types';
import './App.css';
import { load as loadSavedGame } from './saveFile';

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
  const [lightbox, setLightbox] = useState(null as (ReactElement | null));
  const [savedGame, setSavedGame] = useState(loadSavedGame());
  const controller: Controller = Controller.create({
    initialState,
    sceneId, setSceneId,
    inventory, setInventory,
    lightbox, setLightbox,
    savedGame, setSavedGame
  });
  const scene = scenes[sceneId];

  return (
    <div className="app">
      <Menu
        title={scene.name}
        description={scene.description}
      >
        {scene.actions.map((action, index) => (
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
