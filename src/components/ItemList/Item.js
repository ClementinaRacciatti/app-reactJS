import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureURL} />
      <Card.Body>
        <Card.Title>{product.titel}</Card.Title>
        <Card.Text>
          $ {product.price}
        </Card.Text>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="primary">
            Ver Mas
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
 
export default Item;