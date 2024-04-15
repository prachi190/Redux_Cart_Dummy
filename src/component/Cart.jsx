import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing useDispatch
import { Card, Button } from 'react-bootstrap';
import { remove } from '../store/CartSlice'; // Importing the remove action

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch(); // Initializing useDispatch

    const handleRemoveFromCart = (id) => {
        // Dispatching the remove action when the remove button is clicked
        dispatch(remove(id));
    }

    const cards = cartItems.map((product) => (
        <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
            <Card className="h-100" style={{ width: "18rem" }}>
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "100px", height: "130px" }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>INR: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                    <div className="text-center" >
                        {/* Calling handleRemoveFromCart with product id */}
                        <Button variant="danger" onClick={() => handleRemoveFromCart(product.id)}>Remove Item</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <>
            <h1>Cart</h1>
            <div className="row">{cards}</div>
        </>
    );
}

export default Cart;


