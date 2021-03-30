import React from 'react';
import video from '../../../../Assets/Images/spacevid.mp4';
import './Hero.scss';

const Hero = () => {
  return (
    <div className='spaceMain'>
      <main>Stellar</main>
      <video loop autoPlay muted>
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
};

export default Hero;
