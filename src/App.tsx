
import React, { useEffect, useState } from 'react';
import Game from './components/Game';
import GameState from './types/GameState';
import { validateScenes } from './types/Scene';

const initialState: GameState = {
  sceneId: 'outside_front_door',
  inventory: [],
  visited: []
};

const App = () => {
  const [scenes, setScenes] = useState<any[]>([]);

  useEffect(() => {
    import('./scenes.json').then(({ default: scenes }) => setScenes(validateScenes(scenes)));
  }, []);

  return (
    <Game
      scenes={scenes}
      setScenes={setScenes}
      initialState={initialState}
    />
  );
};

export default App;
