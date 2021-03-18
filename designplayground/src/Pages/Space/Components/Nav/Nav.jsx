import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='stellar__navbar'>
      <Link to='/space/'>Stellar</Link>
      <div>
        <Link to='/space/curiousity'>Curiousity</Link>
        <Link to='/space/spirit'>Spirit</Link>
        <Link to='/space/opportunity'>Opportunity</Link>
      </div>
    </nav>
  );
};

export default Nav;
