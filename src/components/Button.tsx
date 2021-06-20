import React, { ReactNode } from 'react';
import './Button.css';

type ButtonType = 'white' | 'white_blue' | 'blue';
type ButtonSize = 'medium' | 'small';

type Props = {
  type?: ButtonType,
  size?: ButtonSize,
  onClick?: () => void,
  disabled?: boolean,
  children: ReactNode
};

/**
 * Core UI component representing a button.  This defines a number of styles for standard button types.
 * This component should be used for all buttons throughout the application to maintain a unified look and feel.
 */
const Button = ({
  type = 'white',
  size = 'medium',
  onClick,
  children,
  ...rest
}: Props) => {
  const className = ['button', type, size].join(' ');
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

namespace Button {
  export type Type = ButtonType;
  export type Size = ButtonSize;
}

export default Button;
