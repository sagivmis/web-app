const Price = ({ product }) => {
  return (
    <div>
      <p className="price">{product.price}$</p>
    </div>
  );
};

export default Price;
