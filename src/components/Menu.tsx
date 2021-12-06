import React, { createRef, ReactNode, RefObject, useEffect } from 'react';
import './Menu.css';
import UnsafeHTML from './UnsafeHTML';

type Props = {
  title: string,
  description: string,
  actions: ReactNode
}

/**
 * Represents the core decision display of the application.
 * This consists of a header, descriptive text, and any number of action buttons.
 */
const Menu = ({ title, description, actions }: Props) => {
  const ref: RefObject<any> = createRef();

  // Scroll to the top of the page when entering any new scene.
  useEffect(() => {
    ref.current.scrollTo(0, 0);
  });

  return (
    <div className="menu" ref={ref}>
      <h1 className="menu-title">{title}</h1>
      <p className="menu-description">
        <UnsafeHTML>{description}</UnsafeHTML>
      </p>
      <div className="menu-actions">
        {actions}
      </div>
    </div>
  );
};

export default Menu;
