const Description = ({ product, showDesc }) => {
  return (
    <div>
      <p className={product.showDescription ? "description" : "hidden"}>
        {product.description}
      </p>
    </div>
  );
};

export default Description;
