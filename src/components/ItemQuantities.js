import React from "react";

const ItemQuantities = ({ prod }) => {
  return (
    <>
      <b style={{ fontWeight: 500 }}>{`${prod.text}`}</b>
      <b style={{ fontWeight: 300, fontSize: "12.5px" }}>
        &nbsp;{`x${prod.quantity}`}
      </b>
      &nbsp;
    </>
  );
};

export default ItemQuantities;
