import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => (
  <div className='splash'>
    <div className='splash-body'>
      <p className='splash-desc'>Where my dogs at?</p>
      <br/>
      <br/>
      <br/>
      <Link className='splash-login-btn' to='/signup'>Join 500dmx</Link>
    </div>
  </div>
);

export default Splash;
