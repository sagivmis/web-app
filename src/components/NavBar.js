import { useLocation } from "react-router-dom";
import Button from "./Button";
import { useHistory } from "react-router-dom";
const NavBar = ({ products }) => {
  const resetQuantityReminderShowDesc = () => {
    products.map((product) => {
      product.quantity = 1;
      product.reminder = false;
      product.show_description = false;
    });
  };
  const history = useHistory();

  const linkAbout = () => {
    history.push("/about");
  };
  const linkHome = () => {
    resetQuantityReminderShowDesc();
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
  const location = useLocation();
  return (
    <div>
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
      {/* <p></p> */}
      {location.pathname !== "/about" && location.pathname !== "/stats" && (
        <Button text={"Stats"} onClick={linkStats} color={"#8ac4ea"} />
      )}
    </div>
  );
};

export default NavBar;
