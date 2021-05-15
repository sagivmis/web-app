const Description = ({ product, showDesc }) => {
  return (
    <div>
      <p className={product.show_description ? "description" : "hidden"}>
        {product.description}
      </p>
    </div>
  );
};

export default Description;
