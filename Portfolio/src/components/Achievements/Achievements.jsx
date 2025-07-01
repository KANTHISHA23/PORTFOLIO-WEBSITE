import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './Achievements.css';
import Slider from 'react-slick';
import { FaExternalLinkAlt } from 'react-icons/fa';

import reliance from '../../assets/reliance.png';
import zidio from '../../assets/zidio_logo.webp';
import hdfc from '../../assets/hdfc.png';
import school from '../../assets/school.jpg';
import leetcode from '../../assets/leetcode.png';
import nestle from '../../assets/nestle.png';
import naukri from '../../assets/naukri.png';
import appthing from '../../assets/appthing.jpg';
import accenture from '../../assets/accenture.png';
import ai from '../../assets/ai.png';
import dsa from '../../assets/dsa.jpeg';
import webdev from '../../assets/webdev.jpg';

import { useInView } from 'react-intersection-observer';
import 'animate.css';

const achievements = [
  { img: accenture, name: 'Accenture Mentee', doc: '../Accenture.png' },
  { img: zidio, name: 'Zidio_Development Intern', doc: '../Zidio.pdf' },
  { img: reliance, name: 'Reliance Scholar', doc: '../Reliance.png' },
  { img: appthing, name: 'Appthing Intern', doc: '../AppThing.pdf' },
  { img: hdfc, name: 'HDFC 2024 Scholar', doc: '../HDFC2024.pdf' },
  { img: leetcode, name: 'Leetcode Badge', doc: '../Leetcode.png' },
  { img: naukri, name: 'NCAT 2025', doc: '../Naukri.pdf' },
  { img: hdfc, name: 'HDFC 2023 Scholar', doc: '../HDFC2023.pdf' },
  { img: nestle, name: 'Nestle 2025', doc: '../Nestle.pdf' },
  { img: dsa, name: 'DSA Workshop', doc: '../DSA.pdf' },
  {
    img: webdev,
    name: 'Web Development Workshop',
    doc: '/WebDevelopment.pdf',
  },
  { img: ai, name: 'AI Workshop', doc: '/AICertificate.pdf' },
  {
    img: school,
    name: 'High Achiever Award',
    doc: '/SchoolScholarship.pdf',
  },
];

const Achievements = () => {
  const subtitle = (
    <>
      Here are a few highlights of my achievements and <br /> certifications —
      and many more to come.
    </>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: false, 
    });

  return (
    <Wrapper id="achievements" className='achievements' title='Achievements' background='dark'>
      <section
  ref={ref}
  className={`slider-wrapper slide-in ${inView ? 'animate' : ''}`}>
        <p>{subtitle}</p>
        <Slider {...settings}>
          {achievements.map((achievement, index) => (
            <div className='achievement-slide' key={index}>
              <img src={achievement.img} alt={achievement.name} />
              <h4>{achievement.name}</h4>
              {achievement.doc && (
                <a
                  href={achievement.doc}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='view-certificate'
                >
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </Slider>
      </section>
    </Wrapper>
  );
};

export default Achievements;
