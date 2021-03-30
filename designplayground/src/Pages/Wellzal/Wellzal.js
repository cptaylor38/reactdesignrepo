import React from 'react';
import './Wellzal.scss';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Landing from './Pages/Landing/Landing';
import Assistance from './Pages/Assistance/Assistance';
import Nav from './Components/Nav/Nav';

const Wellzal = () => {
  return (
    <Container fluid className='wel__page__container'>
      <Nav />
      <Route exact path='/wellzal' component={Landing} />
      <Route path='wellzal/assistance' component={Assistance} />
    </Container>
  );
};

export default Wellzal;
