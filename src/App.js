
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbarcustom from './Navbarcustom';
import Cardsobre from './Cardsobre';
import Cardlocacao from './Cardlocacao';

function App() {
  return (
    <div>
      <Navbarcustom />
      <Container>
        <main>
          <Row>
            <Col className='txttitle' md={8}>
              <h1>Bem-vindo à North Korea Airlines</h1>
              <p className='description'>
                A agencia de viagens da melhor coreia (a do norte)
              </p>
              <div id='cardsobre'>
              <Cardsobre />
              </div>
              <br></br>
              <div id='cardlocacao'>
                <Cardlocacao />
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
