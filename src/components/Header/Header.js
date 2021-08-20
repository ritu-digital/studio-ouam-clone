import React from 'react';
import './HeaderStyles.css';

import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useState } from 'react';
import MenuCloseButton from '../utilities/MenuCloseButton';
import MenuButton from '../utilities/MenuButton';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const changeHeader = () => {
    window.scrollY > 40 ? setHeader(true) : setHeader(false);
  };

  window.addEventListener('scroll', changeHeader);
  return (
    <div className='header'>
      <div className='header__logo'>
        <Logo />
      </div>
      <div
        className={
          isOpen ? 'header__menuSection transit' : 'header__menuSection'
        }
      >
        <button
          className={isOpen ? 'menu-close' : 'menu-open'}
          onClick={toggleHandler}
        >
          {isOpen ? <MenuCloseButton /> : <MenuButton />}
        </button>
        <div className={isOpen ? 'header__menu active' : 'header__menu'}>
          <ul>
            <li>
              <Link
                to='/work'
                style={
                  header
                    ? {
                        color: 'black',
                        borderColor: 'black',
                      }
                    : { color: 'white' }
                }
              >
                work
              </Link>
            </li>
            <li>
              <Link
                to='/studio'
                style={
                  header
                    ? {
                        color: 'black',
                        borderColor: 'black',
                      }
                    : { color: 'white' }
                }
              >
                studio
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                style={
                  header
                    ? {
                        color: 'black',
                        borderColor: 'black',
                      }
                    : { color: 'white' }
                }
              >
                contact
              </Link>
            </li>
            <p>get social :)</p>
            <div
              className={
                window.innerWidth < 769 ? 'social-icons' : 'social-icons-hidden'
              }
            >
              <IconContext.Provider value={{ className: 'social-react-icons' }}>
                <Link to='/instagram'>
                  <FaInstagram />
                </Link>
                <Link to='/facebook'>
                  <FaFacebookF />
                </Link>
                <Link to='/behance'>
                  <FaBehance />
                </Link>
              </IconContext.Provider>
            </div>
            <li>
              <Link
                to='/fr'
                style={
                  header
                    ? {
                        color: 'black',
                        borderColor: 'black',
                      }
                    : { color: 'white' }
                }
              >
                fr{' '}
              </Link>
              <span>-</span>
              <Link
                to='/en'
                style={
                  header
                    ? {
                        color: 'black',
                        borderColor: 'black',
                      }
                    : { color: 'white' }
                }
              >
                en{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
