import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ItemQuantities from "./ItemQuantities";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Footer = ({ updateProds, orders, products, calcTotal, updateOrders }) => {
  const history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    onSubmit(e);
  };

  const handleClose = () => {
    setOpen(false);
    resetShowDesc();
  };

  const resetShowDesc = () => {
    products.map((product) => {
      product.show_description = false;
    });
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
      date: date,
      total: calcTotal(products),
      item_ids: ids,
      quantity: quantity,
    };

    _onAdd(newOrder);
    updateOrders();
  };

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
        <>
          <div className="">
            <Button
              onClick={handleOpen}
              text="Buy"
              color="steelblue"
              className="right-corner details-btn"
            />
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2
                  id="transition-modal-title"
                  className="centered sold-label"
                >{`THANK YOU`}</h2>
                <div className="centered">
                  <p id="transition-modal-description">
                    <b>{`Purchase Successful.`}</b>
                    <>&nbsp;</>
                    <br />
                  </p>
                </div>
              </div>
            </Fade>
          </Modal>
        </>
      )}
      <p>Copyright &copy; 2021</p>
    </footer>
  );
};

export default Footer;
