import Card from 'react-bootstrap/Card';
import './App.css';

function Cardlocacao() {
  return (
     
    <Card border="secondary">
      <Card.Header>North Korea Airlines</Card.Header>
      <Card.Title>Locação</Card.Title>
      <Card.Body>
        <Card.Text>
        Ao escolher viajar com a North Korea Airlines, sua experiência vai além dos céus, estendendo-se ao solo na forma do nosso exclusivo hotel, o Pinnacle Haven. Situado em meio à majestosa paisagem da Coreia do Norte, este não é apenas um lugar para descansar; é uma obra-prima arquitetônica que redefine o conceito de hospedagem.
        </Card.Text>
        <Card.Img variant="top" src="locacao.jpg" />
      </Card.Body>
    </Card>
    
  );
}

export default Cardlocacao;