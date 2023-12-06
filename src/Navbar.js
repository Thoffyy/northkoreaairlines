import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Thoffy's webpage</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#notes">Notes</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#notices">Notices</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbar;
