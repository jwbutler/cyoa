import React, { useState } from 'react';
import ActionButton from './ActionButton';
import Footer from './Footer';
import Menu from './Menu';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import { Action, importScenes } from './Scenes';
import { GameState } from './GameState';
import './App.css';
import NewGameButton from './NewGameButton';

const scenesById = importScenes();
const STARTING_SCENE_ID = 'outside_front_door';

const App = () => {
  const [sceneId, setSceneId] = useState(STARTING_SCENE_ID);
  const scene = scenesById[sceneId];
  const [inventory, setInventory] = useState([] as string[]);
  const state: GameState = { sceneId, inventory };

  const isActionVisible = (action: Action) => {
    if (action.requires) {
      if (action.requires.items) {
        if (!action.requires.items.every(item => inventory.includes(item))) {
          return false;
        }
      }
    }
    if (action.forbids) {
      if (action.forbids.items) {
        if (action.forbids.items.find(item => inventory.includes(item))) {
          return false;
        }
      }
    }
    return true;
  }

  const actionClick = (action: Action) => {
    if (action.scene) {
      setSceneId(action.scene);
    }
    if (action.adds) {
      if (action.adds.items) {
        // TODO: add distinct().  Doesn't matter since remove() will remove the duplicates
        const updatedInventory = [...inventory, ...action.adds.items]
        setInventory(updatedInventory);
      }
    }
    if (action.removes) {
      if (action.removes.items) {
        // TODO: add distinct()
        const { items } = action.removes;
        const updatedInventory = inventory.filter(item => items && !items.includes(item));
        setInventory(updatedInventory);
      }
    }
  };

  const load = ({ sceneId, inventory }: GameState) => {
    setSceneId(sceneId);
    setInventory(inventory);
  }

  const restart = () => {
    setSceneId(STARTING_SCENE_ID);
    setInventory([]);
  };

  return (
    <div className="app">
      <Menu
        title={scene.name}
        description={scene.description}
      >
        {
          scene.actions
            .filter(action => isActionVisible(action))
            .map(action => (
              <ActionButton text={action.text} onClick={() => actionClick(action)} />
            ))
        }
      </Menu>
      <Footer>
        <NewGameButton handleRestart={restart} />
        <SaveButton state={state} />
        <LoadButton handleLoad={load} />
      </Footer>
    </div>
  );
}

export default App;
