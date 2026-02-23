import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const NavBar = ({ setCategory }) => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handleBrandClick = () => {
        setCategory('All');
        navigate('/');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
            <Navbar.Brand style={{ cursor: 'pointer' }} onClick={handleBrandClick}>
                FitGuysOnly
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/cart">
                        Cart <Badge bg="success">{cartItems.length}</Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/account">Account</Nav.Link>
                    <Nav.Link as={Link} to="/support">Support</Nav.Link>      
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
