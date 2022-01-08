import React, { createRef, ReactNode, RefObject, useEffect } from 'react';
import styles from './Menu.module.css';
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
    <div className={styles['menu']} ref={ref}>
      {title && (
        <h1 className={styles['menu-title']}>{title}</h1>
      )}
      <p className={styles['menu-description']}>
        <UnsafeHTML>{description}</UnsafeHTML>
      </p>
      <div className={styles['menu-actions']}>
        {actions}
      </div>
    </div>
  );
};

export default Menu;
