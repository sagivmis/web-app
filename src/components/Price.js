const Price = ({ price, classN = "price", text = "" }) => {
  return (
    <div className={"centered"}>
      <p className={classN}>
        &nbsp;<b className="bold">{text}</b>
        <br />
        &nbsp;&nbsp;{price}$
      </p>
    </div>
  );
};

export default Price;
