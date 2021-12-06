import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import GameState from './types/GameState';
import { importScenes } from './types/Scene';
import definitions from './data/definitions.json';
import './index.css';

const scenes = importScenes();
const initialState: GameState = {
  sceneId: 'intro',
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
