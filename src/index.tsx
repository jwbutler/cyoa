import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { importScenes } from './Scenes';
import { GameState } from './GameState';

const scenes = importScenes();
const initialState: GameState = { sceneId: 'outside_front_door', inventory: [] };

ReactDOM.render(
  <React.StrictMode>
    <App scenes={scenes} initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
);
