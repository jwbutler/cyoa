import React, { ReactNode } from 'react';
import './Button.css';

type ButtonType = 'WHITE' | 'AQUA';

type Props = {
  type: ButtonType,
  classNames?: string[],
  onClick?: () => void,
  disabled?: boolean,
  children: ReactNode
};

const Button = ({ type, classNames, onClick, children, ...rest }: Props) => {
  const className = ['button', type.toLowerCase(), ...(classNames || [])].join(' ');
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
