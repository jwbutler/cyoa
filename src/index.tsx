import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import GameState from './types/GameState';
import Scene, { importScenes } from './types/Scene';
import definitions from './data/definitions.json';
import './index.css';

(async () => {
  const sceneNames: string[] = (await import('./data/scenes.json')).default;
  const scenes: Scene[] = await importScenes(sceneNames);
  const initialState: GameState = {
    sceneId: 'intro_1',
    inventory: [],
    visited: []
  };

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          scenes={scenes}
          definitions={definitions}
          initialState={initialState}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
})();
