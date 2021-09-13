import { Card, Button } from "react-bootstrap";
const obtenerPersonaje = async () => {
  const personajeUrl = await fetch(
    "https://rickandmortyapi.com/api/character/2"
  );
  const personaje = await personajeUrl.json();
  return personaje;
};
const Personaje = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Personaje;
