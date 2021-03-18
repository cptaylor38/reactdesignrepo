import React from 'react';
import { Route } from 'react-router-dom';
import './Space.scss';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Curiousity from './Components/Curiousity/Curiousity';
import Opportunity from './Components/Opportunity/Opportunity';
import Spirit from './Components/Spirit/Spirit';

const Space = () => {
  return (
    <div className='spaceBody'>
      <Nav />
      <Route exact path='/space' component={Main} />
      <Route path='/space/curiousity' component={Curiousity} />
      <Route path='/space/opportunity' component={Opportunity} />
      <Route path='/space/spirit' component={Spirit} />
    </div>
  );
};

export default Space;
