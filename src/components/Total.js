const Total = ({ products }) => {
  let total;
  return (
    <div>
      <p className="total-price">
        {
          (total = products.reduce((res, product) => {
            return product.reminder ? res + product.price : res;
          }, 0))
        }
        $
      </p>
    </div>
  );
};

export default Total;
