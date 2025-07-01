import React from 'react';
import './Wrapper.css';

const Wrapper = ({ id, children, className, title, background }) => {
  return (
    <div
      id={id}
      className={`section ${className ? className : ''} ${
        background === 'dark' ? 'dark' : 'light'
      }`}
    >
      <div className='content2'>
        {title && ( 
          <div className='section-title'>
            <h2
              style={{
                color: background === 'dark' ? 'white' : 'black',
              }}
            >
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
