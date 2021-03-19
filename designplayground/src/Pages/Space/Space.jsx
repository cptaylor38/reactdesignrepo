import React from 'react';
import { Route } from 'react-router-dom';
import './Space.scss';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import RoverMain from './Components/RoverMain/RoverMain';

const Space = () => {
  return (
    <div className='spaceBody'>
      <Nav />
      <Route exact path='/space' component={Main} />
      <Route path='/space/:name' component={RoverMain} />\
    </div>
  );
};

export default Space;
