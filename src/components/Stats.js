import MostSold from "./MostSold";
import Orders from "./Orders";
import TotalOrders from "./TotalOrders";
const Stats = ({ ...props }) => {
  console.log(props.orders);
  return (
    <div>
      <Orders
        updateOrders={props.updateOrders}
        orders={props.orders}
        products={props.products}
      />
      <TotalOrders orders={props.orders} />
      <MostSold orders={props.orders} products={props.products} />
    </div>
  );
};

export default Stats;
