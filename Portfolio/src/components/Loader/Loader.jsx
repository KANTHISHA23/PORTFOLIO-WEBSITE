import React from 'react';
import './Loader.css'; // Add your styles separately

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='spinner' />
      <p>Loading Isha's portfolio...</p>
    </div>
  );
};

export default Loader;
