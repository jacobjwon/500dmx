import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => (
  <div className='splash fadeIn-desaturate'>
    <div className='splash-text'>
      <p className='splash-text-quote'>Where my dogs at?!?</p>
      <Link className='btn-blue-lg' to='/signup'>Join 500dmx</Link>
    </div>
  </div>
);

export default Splash;
