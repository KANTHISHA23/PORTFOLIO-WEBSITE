import img1 from '../../assets/about1.jpg';
import img2 from '../../assets/about2.jpg';
import React from 'react';
import './About.css';
import Wrapper from '../Wrapper/Wrapper';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  return (
    <Wrapper
      id='about'
      className='about'
      background='dark'
      title='A bit about me'
    >
      <section
  ref={ref}
  className={`about-section slide-in ${inView ? 'animate' : ''}`}>
        <div className='about-left'>
          <p>
            I am a 3rd-year student at the University College of Engineering and
            Technology, VBU, majoring in Computer Science and Engineering with a
            current CGPA of 8.5 up to the 4th semester.
          </p>
          <p>
            I’ve always believed in putting consistent effort into everything I
            take on — a mindset reflected in my academic journey, where I
            secured 95.6% in my 10th ICSE and 97% in my 12th ISC board exams.
            Ever since school, I’ve been a programming enthusiast. That early
            curiosity has grown into hands-on experience with the MERN stack,
            and I’ve been consistently sharpening my skills in data structures,
            algorithms, and full-stack development.
          </p>
          <p>
            I actively seek out learning opportunities because I genuinely enjoy
            solving problems and building impactful solutions. I'm now exploring
            meaningful roles where I can continue to grow and contribute through
            code.
          </p>
        </div>
        <div className='about-right'>
          <div className='floating-images'>
            <div className='wraper1'>
              <img src={img1} alt='Award photo1' className='image image-1' />
            </div>
            <div className='wraper2'>
              <img src={img2} alt='Award photo2' className='image image-2' />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
