import React, { createRef, ReactElement, RefObject, useEffect } from 'react';
import ActionButton from './ActionButton';
import './Menu.css';

type Props = {
  title: string,
  description?: string,
  children: ReactElement<typeof ActionButton>[]
}

const Menu = ({ title, description, children }: Props) => {
  const ref: RefObject<any> = createRef();
  useEffect(() => {
    ref.current.scrollTo(0, 0);
  });

  return (
    <div className="menu" ref={ref}>
      <h1>{title}</h1>
      <p className="description">
        {description}
      </p>
      {children}
    </div>
  );
};

export default Menu;
