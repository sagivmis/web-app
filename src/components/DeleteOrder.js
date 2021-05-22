import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteOrder = ({ id, updateOrders }) => {
  const deleteOrder = async () => {
    await fetch(`http://localhost:8000/orders/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: { id: id },
    });
    await updateOrders();
  };
  return (
    <div className="right-corner">
      <FaTimes className="delete-prod " style={{}} onClick={deleteOrder} />
    </div>
  );
};

export default DeleteOrder;
