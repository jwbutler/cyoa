import React, { ReactElement } from 'react';
import './ActionButton.css';

type Props = {
  text: string,
  onClick: () => void
};

const ActionButton = ({ text, onClick }: Props): ReactElement<Props> =>  (
  <div
    key={text}
    className="action"
    onClick={onClick}
  >
    {text}
  </div>
);

export default ActionButton;
