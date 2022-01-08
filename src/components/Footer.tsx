import React from 'react';
import Button from './Button';
import Controller from '../types/Controller';
import Lightbox from './Lightbox';
import GameState from '../types/GameState';
import styles from './Footer.module.css';

type Props = {
  controller: Controller
}

const Footer = ({ controller }: Props) => {
  const loadPrompt = () => {
    if (
      GameState.equals(controller.currentState, controller.savedGame)
      || GameState.equals(controller.currentState, controller.initialState)
    ) {
      load();
    } else {
      controller.setLightbox(
        <Lightbox
          title="Are you sure?"
          body="You will lose any unsaved progress."
          x={false}
          cancel={true}
          handleClose = {(confirm) => {
            if (confirm) {
              load();
            } else {
              controller.setLightbox(null);
            }
          }}
        />
      );
    }
  };

  const load = () => {
    if (controller.savedGame) {
      controller.load(controller.savedGame);
      controller.setLightbox(
        <Lightbox
          title="Game loaded."
          x={false}
          handleClose={() => controller.setLightbox(null)}
        />
      );
    } else {
      controller.setLightbox(
        <Lightbox
          title="Error"
          body="No saved game found."
          x={false}
          handleClose={() => controller.setLightbox(null)}
        />
      );
      controller.setSavedGame(null);
    }
  };

  const savePrompt = () => {
    if (!GameState.equals(controller.currentState, controller.savedGame)) {
      controller.setLightbox(
        <Lightbox
          title="Are you sure?"
          body="You will overwrite your existing saved game."
          x={false}
          cancel={true}
          handleClose = {(confirm) => {
            if (confirm) {
              save();
            } else {
              controller.setLightbox(null);
            }
          }}
        />
      );
    } else {
      save();
    }
  };

  const save = () => {
    controller.save();
    controller.setLightbox(
      <Lightbox
        title="Game saved."
        x={false}
        handleClose={() => controller.setLightbox(null)}
      />
    );
  };

  const restartPrompt = () => {
    controller.setLightbox(
      <Lightbox
        title="Are you sure?"
        body="You will lose any unsaved progress."
        x={false}
        cancel={true}
        handleClose = {(confirm) => {
          if (confirm) {
            controller.restart();
          }
          controller.setLightbox(null);
        }}
      />
    );
  };

  return (
    <div className={styles['footer']}>
      <Button
        type="white"
        size="small"
        onClick={restartPrompt}
      >
        New
      </Button>
      <Button
        type="white"
        size="small"
        onClick={savePrompt}
      >
        Save
      </Button>
      <Button
        type="white"
        size="small"
        onClick={loadPrompt}
        disabled={!controller.savedGame}
      >
        Load
      </Button>
    </div>
  );
};

export default Footer;
