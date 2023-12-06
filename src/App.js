import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Navbarcustom from './Navbarcustom';

function App() {
  return (

        <div className="background-image">
          <Navbarcustom />
          <Container>
            {/* conteúdo aqui */}
          </Container>
        </div>
        );
}

export default App;
