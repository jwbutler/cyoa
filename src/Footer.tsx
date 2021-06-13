import React, { ReactNodeArray } from 'react';
import './Footer.css';

type Props = {
  children: ReactNodeArray;
}

const Footer = ({ children }: Props) => (
  <div className="footer">
    {children}
  </div>
);

export default Footer;
