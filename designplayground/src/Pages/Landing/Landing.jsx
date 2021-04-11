import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import './Landing.scss';

const Landing = () => {
  return (
    <>
      <div>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
          }}
        >
          <NavbarBrand>Logo</NavbarBrand>
          <NavbarText>
            <Link to='/space'>Space</Link>
          </NavbarText>
          <NavbarText>
            <Link to='/foaas'>F'off</Link>
          </NavbarText>
          <NavbarText>
            <Link to='/wellzal'>Wellzal</Link>
          </NavbarText>
          <NavbarText>
            <Link to='/clones'>Clones</Link>
          </NavbarText>
        </nav>
      </div>
      <Container>
        <div>Landing text</div>
      </Container>
    </>
  );
};

export default Landing;
