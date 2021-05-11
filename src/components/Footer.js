import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
const Footer = ({ showAdd, addOrder }) => {
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [id, setID] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");

  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let day = date.getDay();
    let time = `${date.getHours()}${date.getMinutes}`;

    if (false) {
      alert("please add a product");
      return;
    }

    addOrder({ day, time, quantity, total });
  };
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

      {location.pathname !== "/about" && location.pathname !== "/cart" && (
        <Button text={"Cart"} onClick={linkCart} color="#51a7e0" />
      )}
      {location.pathname === "/cart" && (
        <Button text={"Buy"} onClick={linkBuy} color="#51a7e0" />
      )}
      <p></p>
      {location.pathname !== "/about" && (
        <Button text={"About"} onClick={linkAbout} color={"#217dbb"} />
      )}

      {/* <p></p> */}
      {location.pathname !== "/home" && (
        <Button text="Home" onClick={linkHome} color="#6eb5e5" />
      )}

      {/* <p></p> */}
      {location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/cart" && (
          <Button text={"Admin"} onClick={linkAdmin} color={"#8ac4ea"} />
        )}
      <p></p>
      {location.pathname !== "/about" && (
        <Button text={"Stats"} onClick={linkStats} color={"#8ac4ea"} />
      )}
      <p>Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
