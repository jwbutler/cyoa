import React from 'react';
import Button from './Button';

type Props = {
  handleRestart: () => void
};

const NewGameButton = ({ handleRestart }: Props) => (
  <Button
    type="white"
    size="small"
    onClick={handleRestart}
  >
    New
  </Button>
);

export default NewGameButton;
