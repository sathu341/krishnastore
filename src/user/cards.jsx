import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Imagecard(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.imgpath} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imagecard;