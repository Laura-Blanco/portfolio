import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Laura's Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;