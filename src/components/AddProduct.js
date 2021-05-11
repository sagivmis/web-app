import { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const reminder = false;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a product");
      return;
    }

    onAdd({ text, price, description, url, reminder });

    setText("");
    setPrice("");
    setDescription("");
    setUrl("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name of product, i.e. 'Shirt', 'Coat' etc."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Price</label>
        <input
          type="number"
          placeholder="Price of product in $"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>

      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Description of product i.e. '100% cotton' , 'Flower skirt' etc."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={10}
        />
      </div>

      <div className="form-control">
        <label>Image Link</label>
        <input
          type="text"
          placeholder="http://_______.google.co.il"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label></label>
        <input type="submit" value="Save Product" className="btn btn-block" />
      </div>
    </form>
  );
};

export default AddProduct;
