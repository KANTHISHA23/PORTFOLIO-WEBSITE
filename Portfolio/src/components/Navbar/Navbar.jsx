import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
      </div>

      <div className='nav-btns'>
        <a href='#intro'>
          <button>Home</button>
        </a>

        <a href='#about'>
          <button>About</button>
        </a>

        <a href='#skills'>
          <button>Skills</button>
        </a>

        <a href='#achievements'>
          <button>Achievements</button>
        </a>

        <a href='#projects'>
          <button>Projects</button>
        </a>

        <a href='#contactme'>
          <button className='cta'>Let's Connect</button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

