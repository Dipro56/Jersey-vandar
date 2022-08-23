import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo/jv_logo.png';
import { useFirebase } from '../../hooks/useFirebase';
import './Header.css';

export const Header = () => {
  const { user, signOutHandle } = useFirebase();
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
            <Nav.Link href={`/item/${user.uid}`} className="fs-5 link-color">
              Items
            </Nav.Link>

            {user.uid ? (
              <Nav.Link
                href={`/manageItems/${user.uid}`}
                className="fs-5 link-color"
              >
                Manage Items
              </Nav.Link>
            ) : (
              <p>{}</p>
            )}
            {user.uid ? (
              <Nav.Link
                href={`/addItems/${user.uid}`}
                className="fs-5 link-color"
              >
                Add Item
              </Nav.Link>
            ) : (
              <p>{}</p>
            )}
            {user.uid ? (
              <Nav.Link
                href={`/myItems/${user.uid}`}
                className="fs-5 link-color"
              >
                My Items
              </Nav.Link>
            ) : (
              <p>{}</p>
            )}
            {user.email ? (
              <p className="fs-5 text-dark pt-2 ms-2 me-2">{user.email}</p>
            ) : (
              <p>{}</p>
            )}
            {user.uid ? (
              <Nav.Link onClick={signOutHandle} className="fs-5 link-color">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="fs-5 link-color">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
