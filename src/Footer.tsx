import Button from './Button';
import Controller from './Controller';
import Lightbox from './Lightbox';
import React from 'react';
import './Footer.css';

type Props = {
  controller: Controller
}

const Footer = ({ controller }: Props) => {
  const load = () => {
    if (controller.savedGame) {
      controller.load(controller.savedGame);
      controller.setLightbox(
        <Lightbox title="Game loaded" x={false} handleClose={() => controller.setLightbox(null)} />
      );
    }
  };

  const save = () => {
    controller.save();
    controller.setLightbox(
      <Lightbox title="Game saved" x={false} handleClose={() => controller.setLightbox(null)} />
    );
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
        disabled={!controller.savedGame}
      >
        Load
      </Button>
    </div>
  );
}

export default Footer;
