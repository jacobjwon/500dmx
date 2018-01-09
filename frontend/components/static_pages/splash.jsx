import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => (
  <div className='splash fadeIn-slow'>
    <div className='splash-text'>
      <p>Find inspiration and share your best photos</p>
      <Link className='btn-blue-lg' to='/signup'>Join 500dmx</Link>
    </div>
  </div>
);

export default Splash;
