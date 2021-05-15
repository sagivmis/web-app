import { orderBy } from "lodash";
import DeleteOrder from "./DeleteOrder";
import OrderDetails from "./OrderDetails";
import Price from "./Price";

const Order = ({ order, updateOrders, products }) => {
  return (
    <div className={`centered product ${order.reminder ? "reminder" : ""}`}>
      <h3 className="left-corner">{order.date}</h3>
      <p>{}</p>
      <Price price={order.total} classN="price-order" />
      <DeleteOrder id={order.id} updateOrders={updateOrders} />
      <OrderDetails order={order} products={products} />
    </div>
  );
};

export default Order;
