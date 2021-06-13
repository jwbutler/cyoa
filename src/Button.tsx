import React, { ReactNode } from 'react';
import './Button.css';

type ButtonType = 'white';
type ButtonSize = 'small' | 'medium';

type Props = {
  type?: ButtonType,
  size?: ButtonSize,
  classNames?: string[],
  onClick?: () => void,
  disabled?: boolean,
  children: ReactNode
};

const Button = ({
  type = 'white',
  size = 'medium',
  classNames = [],
  onClick,
  children,
  ...rest
}: Props) => {
  const className = ['button', type, size, ...classNames].join(' ');
  return (
    <button
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
