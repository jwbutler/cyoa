import React from 'react';
import type { GameState } from './GameState';
import { save } from './saveFile';
import Button from './Button';

type Props = {
  state: GameState
};

const SaveButton = ({ state }: Props) => {
  const onClick = () => {
    save(state);
  }

  return (
    <Button
      type={'WHITE'}
      onClick={onClick}
    >
      Save
    </Button>
  );
};

export default SaveButton;
