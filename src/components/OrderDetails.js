import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";

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

const OrderDetails = ({ order, products }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let prods = [];
  products.map((product) => {
    order.item_ids.map((item) => {
      if (product._id === item) {
        prods.push(product.text);
      }
    });
  });
  return (
    <div className="modal">
      <div className="">
        <Button
          onClick={handleOpen}
          text="details"
          color="steelblue"
          className="right-corner"
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
            >{`Order Details`}</h2>
            <div className="centered">
              <p id="transition-modal-description">
                <b>{`Order id:`}</b>
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;{`${order._id}`}
                </>
                <br />
                <b>{`Total price:`}</b>
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;{`${order.total}$`}
                </>
                <br />
                <b>{`Item IDs:`}</b>
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`[${order.item_ids}]`}
                </>
                <br />
                <b>{`Products names:`}</b>
                <>&nbsp;&nbsp;&nbsp;{`${prods}`}</>
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OrderDetails;
