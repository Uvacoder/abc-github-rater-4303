import React from 'react';
import { IoIosSpeedometer } from 'react-icons/io';

import ThemeToggler from '../components/Layout/ThemeToggler';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <a href="https://uvacoder.github.io/abc-github-rater" className="logo">
        <IoIosSpeedometer className="icon" size={28} /> GitHub Rater
      </a>
      <ThemeToggler />
    </div>
  );
};

export default Navbar;
