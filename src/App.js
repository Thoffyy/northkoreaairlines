import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Navbar bg='dark' variant='dark' className='justify-content-center'>
      <Container>
        <Navbar.Brand>Web Jonas</Navbar.Brand>
        <Nav className='justify-content-center'>
          <Nav.Link>Lorem Ipsus</Nav.Link>
          <Nav.Link>Lorem Ipsus</Nav.Link>
          <Nav.Link>Lorem Ipsus</Nav.Link>
          <Nav.Link>Lorem Ipsus</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
