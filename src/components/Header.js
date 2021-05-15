import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import Logo from "./Logo";

const Header = ({ title, addProduct, showAdd }) => {
  const location = useLocation();
  const history = useHistory();
  const linkBack = () => {
    history.push("/home");
  };
  return (
    <header className="header">
      {/* <Logo /> */}
      {location.pathname === "/cart" && <h1 className="home-label">CART</h1>}
      {location.pathname === "/home" && (
        <h1 className="cart home-label">HOME</h1>
      )}
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <h1 className="prod-name">Name</h1>
            <h1 className="prod-price">Price</h1>
          </>
        )}
      />
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "X" : "Add"}
          onClick={addProduct}
          color={showAdd ? "#2980b9" : "#6eb5e5"}
        />
      )}
      {location.pathname !== "/home" && (
        <Button text={"Back"} onClick={linkBack} color="#6eb5e5" />
      )}
    </header>
  );
};

export default Header;
