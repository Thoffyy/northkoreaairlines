import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Navbarcustom from './Navbarcustom';

function App() {
  return (

        <div>
          <Navbarcustom />
          <Container>
            {/* conteúdo aqui */}
          </Container>


          <div>
        {/* Adicione a classe blur-image à imagem */}
        <img
          className='blur-image'
          src='kimputin.jpeg'
          alt='Imagem com efeito de desfoque'
        />
          </div>

        </div>
        );
}

export default App;
