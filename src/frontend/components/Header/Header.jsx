import React from 'react';

import '../../assets/styles/Header.scss';
import { Link } from 'react-router-dom';
import logo from '@images/astronomy.png';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='link'>
        <div className='header__container--logo'>
          <span className='header__logo--img'>
            <img className='invert' src={logo} alt='constellation' />
          </span>
          <span className='header__logo--text'>
            SpaceVideo
          </span>
        </div>
      </Link>
      <HeaderMenu />
    </header>
  );
};

export default Header;
