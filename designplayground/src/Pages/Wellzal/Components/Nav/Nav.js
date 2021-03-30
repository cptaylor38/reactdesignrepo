import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Nav.scss';

const WelNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar
      dark
      style={{ backgroundColor: '#dc9100' }}
      expand='md'
      className='wel__navbar'
    >
      <NavbarBrand href='/wellzal' className='wel__logo'>
        Wellzal (Zycoscalatrine)
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar className='wel__nav--links'>
          <NavItem>
            <NavLink className='wel__nav__link' to='#about'>
              About <span>Wellzal</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='wel__nav__link' to='#targettreatments'>
              Target Treatments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='wel__nav__link' to='/wellzal/assistance'>
              Copay Assistance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='wel__nav__link' to='/wellzal/medguide'>
              Medication Guide
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default WelNavbar;

{
  /* <div className='wel__nav'>
      <div className='wel__nav__link__container'>
        <Link to='#about'>
          About <span>Wellzal</span>
        </Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='#targettreatments'>Target Treatments</Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='/wellzal/assistance'>Copay Assistance</Link>
      </div>
      <div className='wel__nav__link__container'>
        <Link to='/wellzal/medguide'>Medication Guide</Link>
      </div>
    </div> */
}
