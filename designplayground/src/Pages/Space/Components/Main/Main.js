import React from 'react';
import './Main.scss';
import { Container } from 'reactstrap';
import Hero from '../Hero/Hero';

const Main = () => {
  return (
    <div>
      <Hero />
      <div>Other content</div>
    </div>
  );
};

export default Main;
