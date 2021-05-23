const Price = ({ price, classN = "price", text = "" }) => {
  return (
    <div className={"centered"}>
      <p className={classN}>
        {text}
        <br />
        &nbsp;{price}$
      </p>
    </div>
  );
};

export default Price;
