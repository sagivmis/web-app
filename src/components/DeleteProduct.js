import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteProduct = ({ id, updateProds }) => {
  const deleteProd = async () => {
    await fetch(`http://localhost:8000/products/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { id: id },
    });
    await updateProds();
  };
  return <FaTimes className="delete-prod" style={{}} onClick={deleteProd} />;
};

export default DeleteProduct;
