import Grid from "@material-ui/core/Grid";
import { Image, StyleSheet } from "react-native";
import Button from "./Button";
import Product from "./Product";
import Counter from "./Counter";
import { useLocation } from "react-router-dom";

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
  products,
}) => {
  let props = {
    width: "inherit",
    height: "inherit",
    zoomWidth: 500,
    img: product.url,
  };

  const location = useLocation();
  return (
    <div>
      <Grid item>
        {location.pathname === "/home" && (
          <Button
            text="Add to Cart"
            onClick={() => onToggle(product._id)}
            color="steelblue"
          />
        )}
        <div
          onMouseOver={() => showDesc(product._id)}
          onMouseOut={() => showDesc(product._id)}
        >
          <Product
            product={product}
            onDelete={onDelete}
            onToggle={onToggle}
            showDesc={showDesc}
            className="home-product"
            updateProds={updateProds}
            products={products}
          />
          <p className="space center"></p>
          <Image
            style={styles.container}
            className="cart-images"
            source={{
              uri: product.url,
            }}
          />
          {location.pathname === "/home" && (
            <Counter
              className="counter"
              addQuantity={addQuantity}
              product={product}
              lowerQuantity={lowerQuantity}
              updateProds={updateProds}
              onToggle={onToggle}
              products={products}
            />
          )}
        </div>
      </Grid>
    </div>
  );
};

export default GridProduct;
