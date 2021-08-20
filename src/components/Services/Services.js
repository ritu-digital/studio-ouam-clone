import React from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 400 });
  }, []);
  return (
    <div className='services'>
      <h1 data-aos='slide-left'>
        Bienvenue Chez{' '}
        <span
          style={{
            fontWeight: '900',
            fontFamily: 'Bowlby One, cursive',
            textTransform: 'lowercase',
          }}
        >
          Ouam
        </span>
      </h1>
      <h1 data-aos='slide-right'>
        Bienvenue Chez{' '}
        <span
          style={{
            fontWeight: '900',
            fontFamily: 'Bowlby One, cursive',
            textTransform: 'lowercase',
          }}
        >
          Ouam
        </span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi id
        alias mollitia ipsam, provident eligendi, veniam debitis consequuntur
        neque officiis temporibus optio reiciendis repellendus, nesciunt nihil
        praesentium suscipit.
      </p>
      <h4
        style={{
          fontWeight: '900',
          fontFamily: 'Bowlby One, cursive',
          textDecoration: 'underline',
          fontSize: '1.8rem',
          width: '43%',
          margin: '5rem 0 6rem 8rem',
        }}
      >
        contact ouam
      </h4>
    </div>
  );
};

export default Services;
