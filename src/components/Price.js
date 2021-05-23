const Price = ({ price, classN = "price", text = "" }) => {
  return (
    <div className={"centered"}>
      <p className={classN}>
        <b className="bold">{text}</b>
        <br />
        &nbsp;{price}$
      </p>
    </div>
  );
};

export default Price;
