import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { FaFileDownload } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './ContactMe.css';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import { toast } from 'react-toastify';

const ContactMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, // allow animation every time it scrolls into view
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://getform.io/f/aronerkb', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully! 🎉');
        e.target.reset(); 
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Try again later.');
    }
  };
  

  return (
    <Wrapper
      id='contactme'
      className='contactme'
      title='Contact Me'
      background='dark'
    >
      <section
        ref={ref}
        className={`wrapper3 slide-in ${inView ? 'animate' : ''}`}
      >
        <div className='left-coln'>
          <h2>Get In Touch</h2>
          <p>
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href={'/Resume.pdf'}
            target='_blank'
            rel='noopener noreferrer'
            className='view-resume'
          >
            <span>
              <FaFileDownload
                style={{
                  fill: '#407aef',
                  padding: '2px 0px',
                  fontSize: '25px',
                }}
              />
            </span>
            Resume
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/isha-kanth-99433925a/'
          >
            <span>
              <BsLinkedin
                style={{
                  fill: '#407aef',
                  padding: '2px 5px',
                  fontSize: '25px',
                }}
              />
            </span>
            linkedin.com/in/isha-kanth-99433925a
          </a>
          <a target='_blank' href='https://github.com/KANTHISHA23'>
            <span>
              <FaGithub
                style={{
                  fill: '#407aef',
                  padding: '2px 5px',
                  fontSize: '25px',
                }}
              />
            </span>
            github.com/KANTHISHA23
          </a>
          <a target='_blank' href='mailto:kanthisha1@gmail.com'>
            <span>
              <MdEmail
                style={{
                  fill: '#407aef',
                  padding: '2px 5px',
                  fontSize: '25px',
                }}
              />
            </span>
            kanthisha1@gmail.com
          </a>
        </div>

        <div className='right-coln'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name'
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email'
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='Your message'
              required
            />

            <input type='text' name='_gotcha' style={{ display: 'none' }} />
            
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default ContactMe;
