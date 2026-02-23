import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import { useCart } from './CartContext';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const allImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/${i}/600/400`,
  title: `Image ${i + 1}`,
  category: i % 3 === 0 ? 'Decent' : i % 3 === 1 ? 'Hot' : 'Sexy',
}));

function ImageDetails() {
  const { imageId } = useParams();
  const image = allImages.find(img => img.id === parseInt(imageId));
  const { addToCart } = useCart();

  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!image) return <div className="text-center mt-5">Image not found</div>;

  const variantImages = Array.from({ length: 4 }, (_, idx) => ({
    src: `https://picsum.photos/seed/${image.id}-${idx}/600/400`,
    alt: `${image.title} variant ${idx + 1}`,
  }));

  const currentImage = variantImages[currentIndex];

  const handleAddToCart = () => {
    addToCart({ ...image, size, color });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? variantImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === variantImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container className="py-4 min-vh-100 d-flex flex-column">
      <Row className="g-4 flex-grow-1">
        <Col md={7} className="text-center">
          <div className="position-relative">
            <Card>
              <Card.Img src={currentImage.src} alt={currentImage.alt} />
            </Card>

            <Button
              variant="light"
              className="position-absolute top-50 start-0 translate-middle-y"
              onClick={handlePrev}
              style={{ zIndex: 1 }}
            >
              <ChevronLeft size={32} />
            </Button>

            <Button
              variant="light"
              className="position-absolute top-50 end-0 translate-middle-y"
              onClick={handleNext}
              style={{ zIndex: 1 }}
            >
              <ChevronRight size={32} />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="d-flex justify-content-center mt-3 gap-2 flex-wrap">
            {variantImages.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                thumbnail
                style={{
                  width: 100,
                  border: idx === currentIndex ? '2px solid green' : '1px solid #ccc',
                  cursor: 'pointer',
                }}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </div>
        </Col>

        <Col md={5}>
          <h2>{image.title}</h2>
          <p>Category: {image.category}</p>

          <Form.Group className="mb-3">
            <Form.Label>Size</Form.Label>
            <Form.Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Select size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="XL">XL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="">Select color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" onClick={handleAddToCart} disabled={!size || !color}>
            ➕ Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageDetails;
