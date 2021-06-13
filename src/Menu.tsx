import React, { createRef, ReactNode, RefObject, useEffect } from 'react';
import './Menu.css';

type Props = {
  title: string,
  description?: string,
  children: ReactNode
}

/**
 * Represents the core decision display of the application.
 * This consists of a header, descriptive text, and any number of action buttons.
 */
const Menu = ({ title, description, children }: Props) => {
  const ref: RefObject<any> = createRef();

  // Scroll to the top of the page when entering any new scene.
  useEffect(() => {
    ref.current.scrollTo(0, 0);
  });

  return (
    <div className="menu" ref={ref}>
      <h1 className="menu-title">{title}</h1>
      <p className="menu-description">
        {description}
      </p>
      {children}
    </div>
  );
};

export default Menu;
