import { FaTimes } from "react-icons/fa";
import Price from "./Price";
import Description from "./Description";
import { useLocation } from "react-router-dom";
import Counter from "./Counter";

const Product = ({ product, onDelete, onToggle, showDesc, editProduct }) => {
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
        <Price product={product} />
        {location.pathname === "/" && (
          <FaTimes
            className="delete-prod"
            style={{}}
            onClick={() => onDelete(product.id)}
          />
        )}
      </h3>
      <Description product={product} showDesc={showDesc} />
    </div>
  );
};

export default Product;
