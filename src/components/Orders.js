import Order from "./Order";
const Orders = ({ ...props }) => {
  return (
    <>
      {props.orders.map((order) => (
        <Order
          key={order.id}
          order={order}
          updateOrders={props.updateOrders}
          products={props.products}
        />
      ))}
      <div className="total-orders"></div>
    </>
  );
};

export default Orders;
