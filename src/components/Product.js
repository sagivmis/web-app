import { FaTimes } from "react-icons/fa";
import Price from "./Price";
import Description from "./Description";
import { useLocation } from "react-router-dom";
import Counter from "./Counter";
import DeleteProduct from "./DeleteProduct";
import UpdateProducts from "./UpdateProducts";

const Product = ({
  product,
  onDelete,
  onToggle,
  showDesc,
  editProduct,
  updateProds,
  ProdsContext,
}) => {
  const location = useLocation();
  return (
    <div
      className={`product ${product.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(product.id)}
      onMouseOver={() => showDesc(product.id)}
      onMouseOut={() => showDesc(product.id)}
    >
      <h3>
        {product.text}
        <Price price={product.price} />
        {/* {location.pathname === "/" && (
          <UpdateProducts ProdsContext={ProdsContext} />
        )} */}
        {location.pathname === "/" && (
          <DeleteProduct id={product.id} updateProds={updateProds} />
        )}
      </h3>
      <Description product={product} showDesc={showDesc} />
    </div>
  );
};

export default Product;
