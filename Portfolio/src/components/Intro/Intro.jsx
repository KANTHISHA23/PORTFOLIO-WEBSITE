import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Intro_Content from '../Intro_Content/Intro_Content.jsx';
import './Intro.css';
import cloud from '../../assets/cloud.png';
import cloudSoft from '../../assets/cloud-soft.png';

function Intro() {
  
  return (
    <div id="intro" className='Intro-section'>
      <div className='vector-bg' id='parallax'></div>
      <img src={cloud} className='cloud' />
      <img src={cloudSoft} className='cloud-soft' />
      <div className='content1'>
        <Navbar />
        <Intro_Content />
      </div>
    </div>
  );
}

export default Intro;
