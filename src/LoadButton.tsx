import React from 'react';
import Button from './Button';
import { load, saveFileExists } from './saveFile';
import type { GameState } from './GameState';

type Props = {
  handleLoad: (state: GameState) => void
};

const LoadButton = ({ handleLoad }: Props) => {
  const onClick = () => {
    const state = load();
    if (state) {
      handleLoad(state);
    }
  };

  return (
    <Button type={'WHITE'}
      disabled={!saveFileExists()}
      onClick={onClick}
    >
      Load
    </Button>
  );
};

export default LoadButton;
