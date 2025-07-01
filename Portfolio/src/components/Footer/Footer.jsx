import React from 'react';
import bg from '../../assets/navbg8.jpg';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={bg}></img>
      <div className='logo1'>
        <p>© 2025 IshaKanth. All rights reserved.</p>
      </div>
      <div className='social-icons'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/isha-kanth-99433925a/'
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a target='_blank' href='https://github.com/KANTHISHA23'>
          <span>
            <FaGithub />
          </span>
        </a>
        <a
          target='_blank'
          href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMGGnDsrZxvbnxrgszMFRNXJTvBBknjChtkpHHfhTpzKStGRFrLVNWLwHCMHgMgqNGQMQf'
        >
          <span>
            <MdEmail/>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
