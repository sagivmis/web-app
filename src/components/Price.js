const Price = ({ price, classN = "price" }) => {
  return (
    <div>
      <p className={classN}>{price}$</p>
    </div>
  );
};

export default Price;
