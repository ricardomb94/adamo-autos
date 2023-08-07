import { Card, CardDeck } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  console.log('PODUCT', product)
  return (
    <CardDeck>
    <Card className="my-3 p-3 rounded d-flex align-items-stretch">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="yellow"
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">€{product.price}</Card.Text>
      </Card.Body>
    </Card>
    </CardDeck>
  );
};

export default Product;
