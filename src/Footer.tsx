import Button from './Button';
import Controller from './Controller';
import Lightbox from './Lightbox';
import React from 'react';
import { equals as gameStateEquals } from './GameState';
import './Footer.css';

type Props = {
  controller: Controller
}

const Footer = ({ controller }: Props) => {
  const loadPrompt = () => {
    if (gameStateEquals(controller.currentState, controller.savedGame)) {
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
    if (!gameStateEquals(controller.currentState, controller.savedGame)) {
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
      <Lightbox title="Game saved" x={false} handleClose={() => controller.setLightbox(null)} />
    );
  };

  const restartPrompt = () => {
    if (gameStateEquals(controller.currentState, controller.initialState)) {
      return;
    }

    controller.setLightbox(
      <Lightbox
        title="Are you sure?"
        body="You will lose any unsaved progress."
        x={false}
        cancel={true}
        handleClose = {(confirm) => {
          if (confirm) {
            controller.restart();
          } else {
            controller.setLightbox(null);
          }
          controller.setLightbox(null);
        }}
      />
    );
  };

  return (
    <div className="footer">
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
}

export default Footer;
