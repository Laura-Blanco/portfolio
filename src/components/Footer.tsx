import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Laura</p>
      <p><a href="mailto:your.email@example.com">Contact Me</a></p>
    </footer>
  );
};

export default Footer;