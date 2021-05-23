import Product from "./Product";
import Total from "./Total";

const Cart = ({ products, onDelete, onToggle, showDesc, calcTotal }) => {
  return (
    <div className="cart">
      {products.map(
        (product) =>
          product.reminder === true &&
          product.quantity >= 2 && (
            <Product
              key={product._id}
              product={product}
              onDelete={onDelete}
              onToggle={onToggle}
              showDesc={showDesc}
              classN="order"
            />
          )
      )}
      <h1 className="total-label">TOTAL:</h1>
      <Total products={products} calcTotal={calcTotal} />
    </div>
  );
};

export default Cart;
