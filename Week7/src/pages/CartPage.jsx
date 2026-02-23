// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../components/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CartPage = () => {
  const { cartItems } = useCart();

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Row className="g-4">
            {cartItems.map((item, index) => (
              <Col key={index} xs={12} md={4}>
                <Card>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Category: {item.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="success" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
