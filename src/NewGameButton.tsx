import React from 'react';
import Button from './Button';

type Props = {
  handleRestart: () => void
};

const NewGameButton = ({ handleRestart }: Props) => (
  <Button
    type={'WHITE'}
    onClick={handleRestart}
  >
    New
  </Button>
);

export default NewGameButton;
