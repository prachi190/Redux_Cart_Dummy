import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    // Assuming cart is the slice name for the cart state in your Redux store
    const cart = useSelector(state => state.cart);

    // Calculate the number of items in the cart
    const cartItemCount = cart.cartItems.length;

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Products</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        {/* Display the number of items in the cart */}
                        <Nav.Link as={Link} to="/cart">My Bag {cartItemCount}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;


