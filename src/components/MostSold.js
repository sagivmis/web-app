import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import ItemSold from "./ItemSold";
import BarChart from "./BarChart";

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
    resetShowDesc();
  };

  const resetShowDesc = () => {
    products.map((product) => {
      product.show_description = false;
    });
  };

  let products_sold = [];
  products.map((product) => {
    orders.map((order) => {
      order.item_ids.map((item) => {
        if (product._id === item) {
          products_sold.push(product);
        }
      });
    });
  });

  let items = [];
  products.map((product) => {
    items.push({
      _id: product._id,
      text: product.text,
      number_sold: 0,
    });
  });
  products_sold.map((sold) => {
    items.map((item) => {
      if (sold._id === item._id) {
        item.number_sold++;
      }
    });
  });
  items.sort((first, second) => {
    return second.number_sold - first.number_sold;
  });

  let count = 0;

  return (
    <div className="modal">
      <div className="">
        <Button
          onClick={handleOpen}
          text="Most Sold Unique"
          color="steelblue"
          className="right-corner"
        />
      </div>
      <Modal
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
            >{`Most Sold Unique Items`}</h2>
            <div className="centered">
              <div id="transition-modal-description">
                {items.map((item) =>
                  count++ < 3 ? (
                    <ItemSold item={item} key={item._id} number={count} />
                  ) : (
                    ""
                  )
                )}
                {/* <BarChart items={items.slice(0, 3)} /> */}
                <br></br>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MostSold;
