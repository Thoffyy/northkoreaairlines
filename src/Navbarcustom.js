import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbarcustom = () => {
  return (
    <Navbar className='navbarcustom' bg="dark" variant="dark">
      <Navbar.Brand>Thoffy's webpage</Navbar.Brand>
      <Nav className="mr-auto" id='textnavbar'>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#notes">Notes</Nav.Link>
        <Nav.Link href="#blog">Blog</Nav.Link>
        <Nav.Link href="#notices">Notices</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbarcustom;
