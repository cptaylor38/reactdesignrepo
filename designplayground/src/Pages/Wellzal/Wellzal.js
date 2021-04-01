import React from 'react';
import './Wellzal.scss';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Landing from './Pages/Landing/Landing';
import Assistance from './Pages/Assistance/Assistance';
import MedGuide from './Pages/MedGuide/MedGuide';
import Nav from './Components/Nav/Nav';

const Wellzal = () => {
  return (
    <Container fluid className='wel__page__container'>
      <Nav />
      <Route exact path='/wellzal' component={Landing} />
      <Route path='/wellzal/assistance' component={Assistance} />
      <Route path='/wellzal/medguide' component={MedGuide} />
    </Container>
  );
};

export default Wellzal;
