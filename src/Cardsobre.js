import Card from 'react-bootstrap/Card';
import './App.css';

function Cardsobre() {
  return (
     
    <Card id='cardsobre' border="secondary" className="text-center">
      <Card.Header>North Korea Airlines</Card.Header>
      <Card.Body>
        <Card.Title>Sobre</Card.Title>
        <Card.Text>
          A North Korea Airlines surgiu com o proposito de facilitar as Imigrações e viagens para a melhor Coreia <br></br>
<br></br>
          Nossa Missão <br></br>

Nosso compromisso vai além de simplesmente proporcionar voos; visamos criar conexões significativas entre as pessoas e este fascinante destino asiático. Através de serviços personalizados e atenção aos detalhes, buscamos tornar cada viagem uma experiência memorável. <br></br>
<br></br>
Serviços Exclusivos <br></br>

Na North Korea Airlines, estamos empenhados em oferecer serviços exclusivos que superam as expectativas. Desde o momento do embarque até a chegada ao destino, nossos passageiros desfrutam de conforto, entretenimento de qualidade e atendimento de classe mundial. <br></br>
<br></br>
Explorando a Coreia do Norte <br></br>

Oferecemos pacotes turísticos sob medida, proporcionando aos nossos clientes a oportunidade de explorar os tesouros culturais e históricos únicos da Coreia do Norte. Nossas parcerias locais garantem experiências autênticas, destacando as belezas naturais, a rica herança cultural e a hospitalidade do povo norte-coreano. <br></br>
        </Card.Text>
        <Card.Img variant="top" src="propaganda1.jpg" />
      </Card.Body>
    </Card>
    
  );
}

export default Cardsobre;