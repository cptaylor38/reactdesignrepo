import React from 'react';
import { Container } from 'reactstrap';
import video from '../../../../Assets/Images/spacevid.mp4';
import './Hero.scss';

const Hero = () => {
  return (
    <Container className='spaceMain'>
      <main>Stellar</main>
      <video loop autoPlay muted>
        <source src={video} type='video/mp4' />
      </video>
    </Container>
  );
};

export default Hero;
