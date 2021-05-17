import Product from "./Product";

const Products = async ({
  products,
  onDelete,
  onToggle,
  showDesc,
  updateProds,
  ProdsContext,
  fetchProducts,
}) => {
  console.log(products);
  await fetchProducts();
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
