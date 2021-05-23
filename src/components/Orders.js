import Order from "./Order";
const Orders = ({ ...props }) => {
  return (
    <div className="container-orders">
      {props.orders.map((order) => (
        <Order
          key={order._id}
          order={order}
          updateOrders={props.updateOrders}
          products={props.products}
        />
      ))}
      <div className="total-orders"></div>
    </div>
  );
};

export default Orders;
