import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Button from "./Button";
function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <Grid container justify="center">
        <div>
          <Button
            onClick={handleDecrement}
            color="steelblue"
            text="-"
            classN="small-btn  "
          />
          <Button
            onClick={handleIncrement}
            color="steelblue"
            text="+"
            classN="small-btn  center"
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
