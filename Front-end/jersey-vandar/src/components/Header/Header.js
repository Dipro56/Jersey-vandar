import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo/jv_logo.png';
import './Header.css';

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-color shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="230"
            height="120"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="fs-5 link-color">
              Home
            </Nav.Link>
            <Nav.Link href="/item" className="fs-5 link-color">
              Items
            </Nav.Link>
            <Nav.Link href="/login" className="fs-5 link-color">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
