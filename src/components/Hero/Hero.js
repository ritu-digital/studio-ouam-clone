import React from 'react';
import './HeroStyles.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import logo from '../../Images/studio-logo.svg';
import eye from '../../Images/studio-logo-eye.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__body'>
        <h1>
          <span>We</span>
          <span>Are</span>
          <span>
            <AiOutlineArrowRight style={{ fontWeight: '100' }} />
          </span>
          <span>
            <img
              src={logo}
              alt='brand-logo'
              style={{ display: 'inline-block' }}
            />
          </span>
        </h1>
        <h1>
          <span>We Do</span>
          <span style={{ fontFamily: 'IM Fell French Canon SC, serif' }}>
            Really
          </span>
          <span
            style={{ fontWeight: '900', fontFamily: 'Bowlby One, cursive' }}
          >
            Cool
          </span>
        </h1>
        <h1>
          <span
            style={{ fontWeight: '900', fontFamily: 'Bowlby One, cursive' }}
          >
            Branding
          </span>
          <span>For</span>
          <span>Really</span>
        </h1>
        <h1>
          <span>
            <img
              src={eye}
              alt='brand-logo'
              style={{ display: 'inline-block' }}
            />
          </span>
          <span style={{ fontFamily: 'IM Fell French Canon SC, serif' }}>
            Talented
          </span>
          <span
            style={{ fontWeight: '900', fontFamily: 'Bowlby One, cursive' }}
          >
            People
          </span>
        </h1>
        <div className='hero__verticalLine'></div>
      </div>
    </div>
  );
};

export default Hero;
