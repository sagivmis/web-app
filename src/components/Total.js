const Total = ({ products, calcTotal }) => {
  let total;

  return (
    <div>
      <p className="total-price">
        {/* {
          (total = products.reduce((res, product) => {
            return product.reminder ? res + product.price : res;
          }, 0))
        } */}
        {calcTotal(products)}${/* {console.log(products)} */}
      </p>
    </div>
  );
};

export default Total;
