import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    position: "flex",
    marginBottom: "220px",
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

const MostSold = ({ orders, products }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   console.log(orders);
  //   console.log(products);
  let products_sold = [];
  products.map((product) => {
    orders.map((order) => {
      order.item_ids.map((item) => {
        if (product.id === item) {
          products_sold.push(product);
        }
      });
    });
  });
  console.log(products_sold);
  function Item(name, id, number_sold = 0) {
    //before first sell
    this.name = name;
    this.id = id;
    this.number_sold = number_sold;
  }
  let items = [];
  products.map((product) => {
    items.push(new Item(product.text, product.id));
  });
  products_sold.map((sold) => {
    items[sold.id - 1].number_sold++;
  });
  items.sort((first, second) => {
    return second.number_sold - first.number_sold;
  });
  return (
    <div className="modal">
      <div className="">
        <Button
          onClick={handleOpen}
          text="Most Sold Items"
          color="steelblue"
          className="right-corner"
        />
      </div>
      <Modal
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
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
            >{`Most Sold Items`}</h2>
            <div className="centered">
              <p id="transition-modal-description">
                <p className="bold">{`No. #1: ${items[0].name}`}</p>
                <p className="thin">{`No. sold: ${items[0].number_sold}`}</p>
                <br></br>
                <p className="bold">{`No. #2: ${items[1].name}`}</p>
                <p className="thin">{`No. sold: ${items[1].number_sold}`}</p>
                <br></br>
                <p className="bold">{`No. #3: ${items[2].name}`}</p>
                <p className="thin">{`No. sold: ${items[2].number_sold}`}</p>
                <br></br>
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MostSold;
