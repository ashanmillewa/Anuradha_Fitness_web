import React from 'react';
import './Header.css';

import Logo from '../../assets/Logo.png';

function Header() {
  return (
    <div className='Header'>
        <img src={Logo} className='Logo' alt=''/>

        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      
    </div>
  );
}

export default Header;
