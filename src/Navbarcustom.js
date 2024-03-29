import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbarcustom = () => {
  return (
    <Navbar className='navbarcustom' bg="dark" variant="dark">
      <Navbar.Brand>North Korea Airlines</Navbar.Brand>
      <Nav className="mr-auto" id='textnavbar'>
        <Nav.Link href="#cardsobre">Sobre</Nav.Link>
        <Nav.Link href="#cardlocacao">Locação</Nav.Link>
        <Nav.Link href="viagens.html">Viagens</Nav.Link>
      </Nav>
    
    </Navbar>
  );
};

export default Navbarcustom;
