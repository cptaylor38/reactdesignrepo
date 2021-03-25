import React from 'react';
import './Wellzal.scss';
import { Container } from 'reactstrap';
import video from '../../Assets/Images/flowerfield.mp4';

const Wellzal = () => {
  return (
    <Container fluid id='wel__page__container'>
      <video autoPlay id='wel__video'>
        <source src={video} type='video/mp4'></source>
      </video>
    </Container>
  );
};

export default Wellzal;
