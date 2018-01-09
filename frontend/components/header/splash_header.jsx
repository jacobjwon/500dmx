import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = (props) => (
  <div>
    <header>
      <nav className='flex-center navbar'>
        <div className='flex-center nav-component nav-left'>
          <Link to='/' className='nav-link-light nav-logo flex-center'>500dmx</Link>

        </div>
        <div className='flex-center nav-component'>
          <span className='flex-center'><Link className='nav-link-light' to='/login'>Log In</Link></span>
          <Link to='/signup' className='flex-center nav-btn-tall nav-btn-tall-light'>Sign Up</Link>
        </div>
      </nav>
    </header>
  </div>
);

export default SplashHeader;
