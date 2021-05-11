import Product from "./Product";
import Total from "./Total";
const Cart = ({ products, onDelete, onToggle, showDesc }) => {
  return (
    <div className="cart">
      {products.map(
        (product) =>
          product.reminder === true && (
            <Product
              key={product.id}
              product={product}
              onDelete={onDelete}
              onToggle={onToggle}
              showDesc={showDesc}
            />
          )
      )}
      <h1 className="total-label">TOTAL:</h1>
      <Total products={products} />
    </div>
  );
};

export default Cart;
