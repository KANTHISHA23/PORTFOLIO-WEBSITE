import React from 'react';
import myself from '../../assets/mee.png';
import { TypeAnimation } from 'react-type-animation';
import './Intro_Content.css';

const Intro_Content = () => {
  return (
    <div className='intro_content'>
      <div className='layout'>
        <div className='left_coln'>
          <img src={myself} className='myself' alt='My profile photo' />
        </div>
        <div className='right_coln'>
          <h1 className='title'>
            <span className='big-text'>
              <span className='text'>Hello👋</span>
              <span>, I Am Isha Kanth</span>
            </span>

            <span className='small-text'>
              <TypeAnimation
                sequence={[
                  'Aspiring Software Developer',
                  2000,
                  'Java Programmer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper='span'
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p>
            I'm a 3rd-year Computer Science and Engineering student with a
            passion for solving real-world problems. I'm driven to continuously
            grow, sharpen my skills, and reach new milestones in my tech
            journey. Let's connect and build something impactful together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro_Content;
