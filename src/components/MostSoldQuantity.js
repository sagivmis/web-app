import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import ItemSold from "./ItemSold";

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

const MostSoldQuantity = ({ orders, products }) => {
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

  let items = [];
  let k = 0;
  products.map((product) => {
    orders.map((order) => {
      k = 0;
      order.item_ids.map((item) => {
        if (product._id === item) {
          items.push({
            text: product.text,
            number_sold: 0,
            _id: item,
          });
          k++;
        }
      });
    });
  });

  let final_items = [];

  items.map((item) => {
    if (!final_items.includes(item._id)) final_items.push(item);
  });
  console.log(orders);
  console.log(final_items);
  console.log(items);
  //   items.map((item) => {
  //     items.map((second_item) => {
  //       if (item._id === second_item._id) {
  //       }
  //     });
  //   });
  //  NEED TO INITIALIZE THE QUANTITY FIRST OF FINAL
  final_items.map((item) => {
    item.number_sold = 0;
  });
  final_items.map((item) => {
    items.map((second_item) => {
      if (item._id === second_item._id) {
        item.number_sold += second_item.number_sold;
      }
    });
  });
  final_items.sort((first, second) => {
    return second.number_sold - first.number_sold;
  });
  let count = 0;
  console.log(final_items);
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
              <div id="transition-modal-description">
                {final_items.map((item) =>
                  count++ < 3 ? (
                    <ItemSold item={item} key={item._id} number={count} />
                  ) : (
                    ""
                  )
                )}
                <br></br>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MostSoldQuantity;
