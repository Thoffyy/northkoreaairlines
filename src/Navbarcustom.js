import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {useState, setCurrentPage} from 'react'


const Navbarcustom = () => {
  return (
    <Navbar className='navbarcustom' bg="dark" variant="dark">
      <Navbar.Brand>North Korea Airlines</Navbar.Brand>
      
      <Nav className="mr-auto" id='textnavbar'>
        <Nav.Link onClick={() => {setCurrentPage(1);}} >Sobre</Nav.Link>
        <Nav.Link onClick={() => {setCurrentPage(2);}} >Viagens</Nav.Link>
        <Nav.Link onClick={() => {setCurrentPage(3);}} >Locação</Nav.Link>
        <Nav.Link onClick={() => {setCurrentPage(4);}} >Segurança</Nav.Link>
      </Nav>
    
    </Navbar>
  );
};

export default Navbarcustom;
