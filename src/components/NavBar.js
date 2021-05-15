import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
const NavBar = () => {
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
  const linkBuy = () => {};
  const location = useLocation();
  return (
    <div>
      {/* {location.pathname !== "/about" && location.pathname !== "/cart" && (
        <Button text={"Cart"} onClick={linkCart} color="#51a7e0" />
      )} */}
      {/* {location.pathname === "/cart" && (
        <Button text={"Buy"} onClick={linkBuy} color="#51a7e0" />
      )} */}
      {/* <p></p> */}
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
