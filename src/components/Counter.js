import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState, useContext } from "react";
import Button from "./Button";
import ProdsContext from "../App";

function Counter({ lowerQuantity, addQuantity, product, updateProds }) {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  const addQuantityy = async (product) => {};

  const [prod, setProd] = useState(product);
  // const { fetchProducts } = React.useContext(ProdsContext);

  const updateProduct = async (product) => {
    await fetch(`https://fastserver-sm.herokuapp.com/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: product.text,
        price: product.price,
        description: product.description,
        show_description: product.show_description,
        image: product.image,
        reminder: product.reminder,
        url: product.url,
        quantity: product.quantity + 1,
      }),
    });
    // onClose();
    // await fetchProducts();
  };
  // Create handleIncrement event handler
  const handleIncrement = (e) => {
    setCount((prevCount) => prevCount + 1);
    // console.log(e.target.className.includes("plus"));
    // console.log(product);
    if (e.target.className.includes("plus")) addQuantity(product);
  };
  const getCount = async () => {
    const res = await fetch("http://localhost:3000/home");
    const json = await res.text();
    console.log(res);
  };
  //Create handleDecrement event handler
  const handleDecrement = (e) => {
    setCount((prevCount) => prevCount - 1);
    if (e.target.className.includes("minus")) lowerQuantity(product);
  };

  return (
    <div>
      <Grid container justify="center">
        <div>
          <Button
            onClick={handleDecrement}
            color="steelblue"
            text="-"
            classN="small-btn minus"
          />
          <Button
            onClick={updateProduct}
            color="steelblue"
            text="+"
            classN="small-btn  center plus"
          />
          <h5 className="count">{count}</h5>
        </div>
        <Button
          onClick={() => setCount(0)}
          color="steelblue"
          text="Reset"
          classN="small-btn "
        />
      </Grid>
    </div>
  );
}

export default Counter;
