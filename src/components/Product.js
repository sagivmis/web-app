import Price from "./Price";
import Description from "./Description";
import { useLocation } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import ItemDetails from "./ItemDetails";

const Product = ({
  product,
  onDelete,
  onToggle,
  showDesc,
  editProduct,
  updateProds,
  ProdsContext,
  products,
}) => {
  const location = useLocation();
  return (
    <div
      className={`product ${
        location.pathname === "/cart" ? "product-cart " : {}
      } ${product.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(product._id)}
      onMouseOver={() => showDesc(product._id)}
      onMouseOut={() => showDesc(product._id)}
    >
      <h3>
        {product.text}
        {location.pathname === "/home" && <Price price={product.price} />}
        {location.pathname === "/cart" && (
          <Price price={product.price} text={"Price:"} />
        )}

        {location.pathname === "/cart" && (
          <Price
            price={product.price * (product.quantity - 1)}
            text={"Total:"}
          />
        )}
        {/* {location.pathname === "/" && (
          <UpdateProducts ProdsContext={ProdsContext} />
        )} */}
        {location.pathname === "/" && (
          <DeleteProduct id={product._id} updateProds={updateProds} />
        )}
      </h3>
      {location.pathname !== "/" && (
        <div className="quantity-div">
          <p className="quantity-centered">{`Quantity: ${
            product.quantity - 1
          }`}</p>
        </div>
      )}

      <Description product={product} showDesc={showDesc} />
      {location.pathname !== "/cart" && (
        <ItemDetails
          product={product}
          classN={"price-order"}
          products={products}
        />
      )}
    </div>
  );
};

export default Product;
