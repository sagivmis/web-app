import NumberFormat from "react-number-format";
const Total = ({ products, calcTotal }) => {
  let total;

  return (
    <div>
      <p className="total-price">
        <NumberFormat
          value={calcTotal(products)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        {/* {calcTotal(products)}$ */}
      </p>
    </div>
  );
};

export default Total;
