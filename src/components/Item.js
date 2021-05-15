import React from "react";

const Item = ({ items }) => {
  return (
    <div>
      <p className="bold">{`No. #2: ${items}`}</p>
      <p className="thin">{`No. sold: ${items}`}</p>
      <br></br>
    </div>
  );
};

export default Item;
