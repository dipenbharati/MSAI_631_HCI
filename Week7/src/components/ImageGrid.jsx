import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

// Sample image data with categories
const allImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/${i}/300/200`,
  title: `Image ${i + 1}`,
  category: i % 3 === 0 ? 'Decent' : i % 3 === 1 ? 'Hot' : 'Sexy',
}));

const ImageGrid = ({ category }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => addToCart(item);
  const handleSeeMore = () => console.log('See more clicked');

  const filteredImages = category === 'All'
    ? allImages
    : allImages.filter((img) => img.category === category);

  return (
    <div className="px-2 py-4">
      <h3 className="mb-3">{category}</h3>
      <Row className="g-3">
        {filteredImages.map((image) => (
          <Col key={image.id} xs={12} md={4}>
            <Card className="h-100 d-flex flex-column">
              <Link to={`/image/${image.id}`}>
                <Card.Img
                  variant="top"
                  src={image.src}
                  style={{ cursor: 'pointer' }}
                  alt={image.title}
                />
              </Link>
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center">{image.title}</Card.Title>
                <div className="text-center mt-3">
                  <Button variant="success" onClick={() => handleAddToCart(image)}>
                    ➕ Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleSeeMore}>See More</Button>
      </div>
    </div>
  );
};

export default ImageGrid;
