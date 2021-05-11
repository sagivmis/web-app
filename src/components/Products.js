import Product from "./Product";

const Products = ({ products, onDelete, onToggle, showDesc }) => {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={onDelete}
          onToggle={onToggle}
          showDesc={showDesc}
        />
      ))}
    </>
  );
};

export default Products;
