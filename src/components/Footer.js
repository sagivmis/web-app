import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { IDAStarFinder } from "pathfinding";
import Products from "./Products";
const Footer = ({
  showAdd,
  updateProds,
  orders,
  products,
  calcTotal,
  updateOrders,
}) => {
  // const [day, setDay] = useState("");
  // const [time, setTime] = useState("");
  // const [id, setID] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [total, setTotal] = useState("");

  const history = useHistory();

  const linkAbout = () => {
    history.push("/about");
  };
  const linkHome = () => {
    history.push("/home");
  };
  const linkStats = () => {
    history.push("/stats");
  };
  const linkAdmin = () => {
    history.push("/");
  };
  const linkCart = () => {
    history.push("/cart");
  };

  const _onAdd = (newOrder) => {
    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    }).then(updateProds);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let ids = [];
    let quantity = [];
    products.map((product) => {
      if (product.reminder) {
        ids.push(product._id);
        quantity.push(product.quantity - 1);
      }
    });
    let d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;

    console.log(`date: ${date}`);
    const newOrder = {
      // id: orders.length + 1,
      date: date, //implemet date
      total: calcTotal(products),
      item_ids: ids,
      quantity: quantity,
    };

    // onAdd({ text, price, description, url, reminder });
    _onAdd(newOrder);
    updateOrders();
  };

  const linkBuy = () => {};
  const location = useLocation();
  return (
    <footer className="footer">
      {location.pathname === "/home" && (
        <p className="small-note">
          *you can either double-click or press "Add to Cart" to add a product
          to cart
        </p>
      )}
      {/* {location.pathname === "/home" && (
        <Button
          text={"Update Products"}
          onClick={updateProds}
          color="#51a7ee"
        />
      )} */}
      {location.pathname !== "/about" && location.pathname !== "/cart" && (
        <Button text={"Cart"} onClick={linkCart} color="#51a7e0" />
      )}
      {location.pathname === "/cart" && (
        <Button text={"Buy"} onClick={onSubmit} color="#51a7e0" />
      )}
      {/* <p></p>
      {location.pathname !== "/about" && (
        <Button text={"About"} onClick={linkAbout} color={"#217dbb"} />
      )}

      {location.pathname !== "/home" && (
        <Button text="Home" onClick={linkHome} color="#6eb5e5" />
      )}

      {location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/cart" && (
          <Button text={"Admin"} onClick={linkAdmin} color={"#8ac4ea"} />
        )}
      <p></p>
      {location.pathname !== "/about" && (
        <Button text={"Stats"} onClick={linkStats} color={"#8ac4ea"} />
      )} */}
      <p>Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
