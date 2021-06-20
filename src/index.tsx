import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GameState from './types/GameState';
import { importScenes } from './types/Scene';
import './index.css';

const scenes = importScenes();
const initialState: GameState = {
  sceneId: 'outside_front_door',
  inventory: [],
  visited: []
};

ReactDOM.render(
  <React.StrictMode>
    <App scenes={scenes} initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
);
