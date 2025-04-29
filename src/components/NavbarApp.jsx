import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router"
// import Logo from '../assets/LOGO_RollingGames.png';
const NavBarApp = () => {
  return (
    <Navbar expand="lg" style={{ background: 'linear-gradient(90deg, #1E1E2F, #2A2A40)' }} variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center' }}>
          {/* <img
            src={Logo}
            alt="Rolling Games Logo"
            style={{
              height: '60px',
              marginRight: '10px',
              filter: 'drop-shadow(0 0 5px #00F2FF)'
            }}
          /> */}
          <span style={{
            color: '#00F2FF',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            textShadow: '0 0 5px #00F2FF'
          }}>
            Rolling Games
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={navLinkStyle}>
                <NavLink to="/">Inicio</NavLink>
            </Nav.Link>
            <Nav.Link style={navLinkStyle}>
                <NavLink to="/login">Login</NavLink>
            </Nav.Link>
            <Nav.Link style={navLinkStyle}>
                <NavLink to="/registro">Registrarse</NavLink>
            </Nav.Link>
            <Nav.Link style={navLinkStyle}>
                <NavLink to="/admin">Admin</NavLink>
            </Nav.Link>
            {/* <Nav.Link style={navLinkStyle}>Login</Nav.Link>
            <Nav.Link style={navLinkStyle}>Registrarse</Nav.Link>
            <Nav.Link style={navLinkStyle}>Admin</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const navLinkStyle = {
  color: '#FFFFFF',
  marginLeft: '15px',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  textDecoration: 'none'
};
export default NavBarApp;