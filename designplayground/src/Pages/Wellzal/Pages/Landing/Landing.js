import React from 'react';
import './Landing.scss';
import Hero from '../../Components/Hero/Hero';
import Nav from '../../Components/Nav/Nav';

const Landing = () => {
  return (
    <div className='wel_landing--top'>
      <Hero />
      <Nav />
      <div className='wel__lead'>
        <h1>Ready to feel better?</h1>
      </div>
    </div>
  );
};

export default Landing;
