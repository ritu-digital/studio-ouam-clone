import React from 'react';
import './LogoStyles.css';
import logo from '../../Images/studio-logo.svg';
import eye from '../../Images/studio-logo-eye.svg';
import { Link } from 'react-router-dom';
import logo2 from '../../Images/logo2.svg';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      {window.scrollY > 50 && window.scrollY < 140 ? (
        <img src={logo2} alt='brand-logo' />
      ) : (
        <img src={logo} alt='brand-logo' />
      )}

      <img
        src={eye}
        alt='brand-logo-eye'
        style={
          window.innerWidth > 768 ? { display: 'none' } : { display: 'block' }
        }
      />
    </Link>
  );
};

export default Logo;
