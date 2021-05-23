import DeleteOrder from "./DeleteOrder";
import OrderDetails from "./OrderDetails";
import Price from "./Price";
import { useLocation } from "react-router-dom";

const Order = ({ order, updateOrders, products }) => {
  const location = useLocation();
  return (
    <div
      className={`centered product-cart ${order.reminder ? "reminder" : {}} ${
        location.pathname === "/stats" ? "order-stats" : {}
      }`}
    >
      <h3 className="left-corner">{order.date}</h3>
      <p>{}</p>
      <Price price={order.total} classN="price-order" text={`   Total:`} />
      <DeleteOrder id={order._id} updateOrders={updateOrders} />
      <OrderDetails order={order} products={products} />
    </div>
  );
};

export default Order;
