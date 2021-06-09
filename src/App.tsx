import React, { useState } from 'react';
import './App.css';
import { Action, importScenes } from './Scenes';
import Menu from './Menu';
import ActionButton from './ActionButton';

const scenesById = importScenes();
const STARTING_SCENE_ID = 'outside_front_door';

const App = () => {
  const [sceneId, setSceneId] = useState(STARTING_SCENE_ID);
  const room = scenesById[sceneId];
  const [inventory, setInventory] = useState([] as string[]);

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

  return (
    <Menu
      title={room.name}
      description={room.description}
    >
      {
        room.actions
          .filter(action => isActionVisible(action))
          .map(action => (
            <ActionButton text={action.text} onClick={() => actionClick(action)} />
          ))
      }
    </Menu>
  );
}

export default App;
