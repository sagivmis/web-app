import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState, useContext } from "react";
import Button from "./Button";

function Counter({ lowerQuantity, addQuantity, product }) {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  const updateProduct = async (product) => {
    await fetch(`http://localhost:8000/products/${product.id}`, {
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
  };

  // Create handleIncrement event handler
  const handleIncrement = (e) => {
    if (count < 99) {
      setCount(count + 1);
      if (e.target.className.includes("plus")) {
        product.reminder = true;
        addQuantity(product);
      }
    }
  };

  //Create handleDecrement event handler
  const handleDecrement = (e) => {
    if (count > 0) {
      setCount(count - 1);
      if (count === 1) {
        product.reminder = false;
      }
      if (e.target.className.includes("minus")) lowerQuantity(product);
    }
  };

  const handleReset = (e) => {
    setCount(0);
    product.quantity = 1;
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
            onClick={handleIncrement}
            color="steelblue"
            text="+"
            classN="small-btn  center plus"
          />
          <h5 className="count">{count}</h5>
        </div>
        <Button
          onClick={handleReset}
          color="steelblue"
          text="Reset"
          classN="small-btn "
        />
      </Grid>
    </div>
  );
}

export default Counter;
