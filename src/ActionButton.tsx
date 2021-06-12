import React, { ReactElement } from 'react';
import './ActionButton.css';
import Button from './Button';

type Props = {
  text: string,
  onClick: () => void
};

const ActionButton = ({ text, onClick }: Props): ReactElement<Props> =>  (
  <Button
    type={'WHITE'}
    key={text}
    onClick={onClick}
  >
    {text}
  </Button>
);

export default ActionButton;
