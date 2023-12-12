
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbarcustom from './Navbarcustom';
import Cardsobre from './Cardsobre';

function App() {
  return (
    <div className="app-container">
      <Navbarcustom />
      <Container>
        <main className='main-content'>
          <Row>
            <Col className='txttitle' md={8}>
              <h1>Bem-vindo à North Korea Airlines</h1>
              <p className='description'>
                A agência de viagens da melhor Coreia (a do norte)
              </p>
              <div id='cardsobre'>
                <Cardsobre />
              </div>
            </Col>
            <Col md={4}>
              <img
                className='vertical'
                src='flagvertical.png'
                alt='verticalflag'
              />
            </Col>
          </Row>
        </main>
      </Container>

      <footer className="text-center py-3 bg-dark text-light">
        <p>&copy; 2023 [북한항공]. 판권소유.</p>
      </footer>
    </div>
  );
}

export default App;
