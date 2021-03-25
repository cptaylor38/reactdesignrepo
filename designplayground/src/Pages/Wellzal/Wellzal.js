import React from 'react';
import './Wellzal.scss';
import { Container } from 'reactstrap';
import video from '../../Assets/Images/flowerfield.mp4';

const Wellzal = () => {
  return (
    <Container fluid className='wel__page__container'>
      <video autoPlay className='wel__video'>
        <source src={video} type='video/mp4'></source>
      </video>
      <div className='wel__lead'>
        <h1>Ready to feel better?</h1>
      </div>
    </Container>
  );
};

export default Wellzal;
