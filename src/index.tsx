import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GameState from './GameState';
import { importScenes } from './scenes';
import './index.css';

const scenes = importScenes();
const initialState: GameState = { sceneId: 'outside_front_door', inventory: [] };

ReactDOM.render(
  <React.StrictMode>
    <App scenes={scenes} initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
);
