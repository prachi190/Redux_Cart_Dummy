import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utlis/statusCode";
const Product = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.products);
    const status = data.status
    const products = data.dataArray;
 // const [products, getProducts] = useState([]); // as initial array is empty
  useEffect(() => {
   

    dispatch(getProducts())
    //fetch("https://fakestoreapi.com/products")
     // .then((data) => data.json()) //data parsiong to json converting it to json
      //.then((result) => getProducts(result)); //setting the data to products
    //using react boot strap and bootstrap
  },[]); //calling it once on inital calling on mounting

  //will use map method to iterate over single cart

  // if we are using curly braces in map function then we will have to return something
  // we have removed the cury braces of map function

  if (status === StatusCode.LOADING) {
    return (
        <div className="loading-container">
            <p className="loading-text">Loading...</p>
        </div>
    );
}
if (status === StatusCode.ERROR ) {
    return (
        <div className="error-container">
            <p className="error-text">Something went wrong!!!!</p>
        </div>
    );
}



  const addToCart = (product)=>{
    //dispatch the  add action
    dispatch(add(product)) //add the action and passing the payload
 
  }
  const cards = products.map((product) => (
    <div  key={product.id}className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card  className="h-100" style={{ width: "18rem" }}>
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
            <Button variant="primary" onClick={()=>addToCart(product)} >Add To Cart</Button>
            </div>
         
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
