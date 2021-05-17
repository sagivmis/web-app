import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridProduct from "./GridProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const Home = ({ ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {props.products.map((product) => (
          <GridProduct
            key={product.id}
            product={product}
            onToggle={props.onToggle}
            showDesc={props.showDesc}
            onDelete={() => {
              alert(
                `Can't delete products from this page. Please if you have relevant permission refer to 'Admin' page`
              );
            }}
            addQuantity={props.addQuantity}
            lowerQuantity={props.lowerQuantity}
            updateProds={props.updateProds}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
