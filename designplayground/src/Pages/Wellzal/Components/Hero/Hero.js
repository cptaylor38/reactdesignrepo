import React from 'react';
import './Hero.scss';
import wel_image from '../../../../Assets/Images/wellzal.jpg';

const Hero = () => {
  return (
    <div className='wel__v__container'>
      <img
        src={wel_image}
        alt='wellzal stock photo'
        className='wel__hero__image'
      />
      <div className='wel__hero_description'>
        <h1>Wellzal</h1>
        <h3>(Zycoscalatrine)</h3>
      </div>
    </div>
  );
};

export default Hero;
