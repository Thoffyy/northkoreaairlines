import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Navbarcustom from './Navbarcustom';

function App() {
  return (
    <div>
      <Navbarcustom />
      <Container>
        <main>
          <Row>
            <Col className='txttitle' md={8}>
              <h2>Bem-vindo à [Nome da Empresa]</h2>
              <p>
                [Descrição da empresa fictícia que oferece voos para a Coreia do Norte.]
              </p>
              {/* Adicione mais conteúdo aqui conforme necessário */}
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
