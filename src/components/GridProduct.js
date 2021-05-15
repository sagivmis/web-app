import Grid from "@material-ui/core/Grid";
import { Image, StyleSheet } from "react-native";
import Button from "./Button";
import Product from "./Product";
import Counter from "./Counter";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: 110,
    height: 110,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
const GridProduct = ({
  product,
  onToggle,
  showDesc,
  onDelete,
  addQuantity,
  lowerQuantity,
  updateProds,
}) => {
  return (
    <div>
      <Grid item>
        <Button
          text="Add to Cart"
          onClick={() => onToggle(product.id)}
          color="steelblue"
        />
        <div
          onMouseOver={() => showDesc(product.id)}
          onMouseOut={() => showDesc(product.id)}
        >
          <Product
            product={product}
            onDelete={onDelete}
            onToggle={onToggle}
            showDesc={showDesc}
            className="home-product"
          />
          <p className="space center"></p>
          <Image
            style={styles.container}
            className="cart-images"
            source={{
              uri: product.url,
            }}
          />

          <Counter
            className="counter"
            addQuantity={addQuantity}
            product={product}
            lowerQuantity={lowerQuantity}
            updateProds={updateProds}
          />
        </div>
      </Grid>
    </div>
  );
};

export default GridProduct;
