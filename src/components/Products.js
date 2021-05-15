import Product from "./Product";

const Products = ({
  products,
  onDelete,
  onToggle,
  showDesc,
  updateProds,
  ProdsContext,
}) => {
  // console.log(products);
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={onDelete}
          onToggle={onToggle}
          showDesc={showDesc}
          updateProds={updateProds}
          ProdsContext={ProdsContext}
        />
      ))}
    </>
  );
};

export default Products;
