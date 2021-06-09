import React, { ReactElement } from 'react';
import ActionButton from './ActionButton';
import './Menu.css';

type Props = {
  title: string,
  description?: string,
  children: ReactElement<typeof ActionButton>[]
}

const Menu = ({ title, description, children }: Props) => (
  <div className="menu">
    <h1>{title}</h1>
    <div className="description">
      {description}
    </div>
    {children}
  </div>
);

export default Menu;
