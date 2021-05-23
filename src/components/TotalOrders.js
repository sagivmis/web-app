import React from "react";
import NumberFormat from "react-number-format";

const TotalOrders = ({ orders }) => {
  const calcTotal = (orders) => {
    const total = orders.reduce((acc, order) => {
      return order.total + acc;
    }, 0);
    return total;
  };
  return (
    <div className="hovered">
      <h1 className="rightened">TOTAL:</h1>
      <p className="rightened total-int">
        <NumberFormat
          value={calcTotal(orders)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </p>
    </div>
  );
};

export default TotalOrders;
