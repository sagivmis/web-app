import { propNames } from "@chakra-ui/styled-system";
import Product from "./Product";

const Products = async ({
  // products,
  // onDelete,
  // onToggle,
  // showDesc,
  // updateProds,
  // ProdsContext,
  // fetchProducts,
  ...props
}) => {
  // await fetchProducts();
  console.log(props.products);
  return (
    <div>
      props.products.length && (
      {props.products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
          showDesc={props.showDesc}
          updateProds={props.updateProds}
          ProdsContext={props.ProdsContext}
        />
      ))}
    </div>
  );
};

export default Products;
