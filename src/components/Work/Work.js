import React from 'react';
import './Work.css';
import { BsArrowRight } from 'react-icons/bs';
import ScrollContainer from 'react-indiana-drag-scroll';

const Work = () => {
  return (
    <div className='work'>
      <h1
        style={{
          fontFamily: 'IM Fell French Canon SC, serif',
          fontSize: '4.8rem',
          marginTop: '12vh',
          marginLeft: '10rem',
          width: '35%',
          lineHeight: 1,
          position: 'relative',
          zIndex: '10',
        }}
      >
        That's Our{' '}
        <span
          style={{
            fontWeight: '900',
            fontFamily: 'Bowlby One, cursive',
            letterSpacing: '4px',
          }}
        >
          Work.
        </span>
      </h1>
      <ScrollContainer className='work__content'>
        <div className='container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMIczkMaTPVEqOHx_qq0sCY-EA8AV2qsC4Q&usqp=CAU'
            alt='product'
          />
        </div>
        <div className='container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn6VBSYf3ise4etKzZXyDMs8uybfJ9Pghtg&usqp=CAU'
            alt='product'
          />
        </div>
        <div className='container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMIczkMaTPVEqOHx_qq0sCY-EA8AV2qsC4Q&usqp=CAU'
            alt='product'
          />
        </div>
        <div className='container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn6VBSYf3ise4etKzZXyDMs8uybfJ9Pghtg&usqp=CAU'
            alt='product'
          />
        </div>
        <div className='container'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMIczkMaTPVEqOHx_qq0sCY-EA8AV2qsC4Q&usqp=CAU'
            alt='product'
          />
        </div>
      </ScrollContainer>
      <p
        style={{
          fontSize: '18px',
          marginTop: '4rem',
          width: '100%',
          lineHeight: 1,
          position: 'relative',
          textTransform: 'uppercase',
          transform: 'translate(50%,50%)',
          bottom: '0.5rem',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          see more
          <BsArrowRight />
        </span>
      </p>
    </div>
  );
};

export default Work;
