import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>Epic Wallpaper</h1>
      <div>
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
