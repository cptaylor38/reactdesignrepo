import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='wel__nav'>
      <div className='wel__nav__link__container'>
        <Link to='#about'>About Wellzal</Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='#targettreatments'>Target Treatments</Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='/wellzal/assistance'>Copay Assistance</Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='/wellzal/medguide'>Medication Guide</Link>
      </div>
    </div>
  );
};

export default Nav;
