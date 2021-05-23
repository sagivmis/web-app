import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "./Button";
import React from "react";

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

const ItemDetails = ({ product, classN }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="rightened modal-right">
      <div className="">
        <Button
          onClick={handleOpen}
          text="i"
          color="steelblue"
          classN={"xsmall-btn"}
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
            >{`${product.text} Details`}</h2>
            <div className="centered">
              <p id="transition-modal-description">
                <b>{`Product id: `}</b>
                <>&nbsp;&nbsp;&nbsp;{` ${product._id}`}</>
                <br />
                <b>{`Price: `}</b>
                <>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {` ${product.price}$`}
                </>
                <br />
                <b>{`Description: `}</b>
                <>&nbsp;{` ${product.description}`}</>
                <br />
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ItemDetails;
