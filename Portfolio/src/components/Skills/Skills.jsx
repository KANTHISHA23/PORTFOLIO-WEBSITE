import React from 'react';
import './Skills.css';
import Wrapper from '../Wrapper/Wrapper';
import techIcons from '../../assets/techIcons.png';
import { IoLogoHtml5 } from 'react-icons/io5';
import { IoLogoCss3 } from 'react-icons/io5';
import { IoLogoNodejs } from 'react-icons/io5';
import { IoLogoReact } from 'react-icons/io5';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiJavaLine } from 'react-icons/ri';
import { SiMui } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa6';
import { PiFileCSharpFill } from 'react-icons/pi';
import { RiSpeakAiFill } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Skills() {
  const subtitle = (
    <>
      Throughout my journey, I have consistently worked on improving both my
      hard and soft skills,
      <br />
      recognizing their importance in shaping a well-rounded personality. Below
      <br />
      are some of the skills I have developed.
    </>
  );

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  return (
    <Wrapper
      id='skills'
      className='skills-section'
      title='Skills'
      background='light'
    >
      <section
        ref={ref}
        className={`wrapper1 slide-in ${inView ? 'animate' : ''}`}
      >
        <div className='left-col'>
          <img
            src={techIcons}
            alt='JavaScript, React, CSS, HTML, SASS, Photoshop, Figma'
          />
        </div>
        <div className='right-col'>
          <div className='skills frontend'>
            <li>
              <h3>Frontend</h3>
              <ul>
                <span className='icons'>
                  <IoLogoHtml5
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                HTML
              </ul>
              <ul>
                <span>
                  <IoLogoCss3
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                CSS
              </ul>
              <ul>
                <span>
                  <SiMui
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',

                      fontSize: '25px',
                    }}
                  />
                </span>
                Material UI
              </ul>
              <ul>
                <span>
                  <IoLogoReact
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                React.js
              </ul>
            </li>
          </div>
          <div className='skills backend'>
            <li>
              <h3>Backend</h3>
              <ul>
                <span>
                  <IoLogoNodejs
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',

                      fontSize: '25px',
                    }}
                  />
                </span>
                Node.js
              </ul>
              <ul>
                <span>
                  <SiExpress
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                Express.js
              </ul>
              <ul>
                <span>
                  <SiMongodb
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',

                      fontSize: '25px',
                    }}
                  />
                </span>
                Mongo.DB
              </ul>
            </li>
          </div>
          <div className='skills languages'>
            <li>
              <h3>Languages</h3>
              <ul>
                <span>
                  <RiJavaLine
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                Java
              </ul>
              <ul>
                <span>
                  <IoLogoJavascript
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',

                      fontSize: '25px',
                    }}
                  />
                </span>
                JavaScript
              </ul>
              <ul>
                <span>
                  <SiCplusplus
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                C++
              </ul>
              <ul>
                <span>
                  <PiFileCSharpFill
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',

                      fontSize: '25px',
                    }}
                  />
                </span>
                C#
              </ul>
            </li>
          </div>
          <div className='skills other'>
            <li>
              <h3>Other Skills</h3>
              <ul>
                <span>
                  <FaGitAlt
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                Git
              </ul>
              <ul>
                <span>
                  <RiJavaLine
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                OOP
              </ul>
              <ul>
                <span>
                  <RiSpeakAiFill
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                Communication
              </ul>
              <ul>
                <span>
                  <RiJavaLine
                    style={{
                      fill: 'rgb(103, 39, 115)',
                      padding: '2px 5px',
                      fontSize: '25px',
                    }}
                  />
                </span>
                Data Structure&Algorithm
              </ul>
            </li>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Skills;
