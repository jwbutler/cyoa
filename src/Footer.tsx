import Button from './Button';
import Controller from './Controller';
import React from 'react';
import { GameState } from './GameState';
import {
  exists as saveFileExists,
  load as loadSaveFile,
  save as saveFile,
} from './saveFile';
import './Footer.css';

type Props = {
  controller: Controller
}

const Footer = ({ controller }: Props) => {
  const load = () => {
    const state = loadSaveFile();
    if (state) {
      controller.load(state);
    }
  };

  const save = () => {
    const { sceneId, inventory }: GameState = controller;
    saveFile({ sceneId, inventory });
  };

  const restart = () => controller.restart();

  return (
    <div className="footer">
      <Button
        type="white"
        size="small"
        onClick={restart}
      >
        New
      </Button>
      <Button
        type="white"
        size="small"
        onClick={save}
      >
        Save
      </Button>
      <Button
        type="white"
        size="small"
        onClick={load}
        disabled={!saveFileExists()}
      >
        Load
      </Button>
    </div>
  );
}

export default Footer;
