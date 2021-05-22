import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Cart from "./components/Cart";
import axios from "axios";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import GridProduct from "./components/GridProduct";
import Grid from "@material-ui/core/Grid";

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  //toggle reminder
  const toggleReminder = (id) => {
    setProducts(
      products.map((product) =>
        product._id === id
          ? { ...product, reminder: !product.reminder }
          : product
      )
    );
  };
  //toggle description
  const toggleDescription = (id) => {
    setProducts(
      products.map((product) =>
        product._id === id
          ? { ...product, show_description: !product.show_description }
          : product
      )
    );
  };
  //toggle description
  const toggleDescriptionOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order._id === id
          ? { ...order, showDescription: !order.showDescription }
          : order
      )
    );
  };

  const lowerQuantity = (prod) => {
    const id = prod._id;
    setProducts(
      products.map((product) =>
        product._id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    // console.log(products[0].quantity);
  };
  const addQuantity = (prod) => {
    const id = prod._id;
    setProducts(
      products.map((product) =>
        product._id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    // console.log(products[0].quantity);
  };
  //Add product
  const addProduct = (product) => {
    axios
      .post("http://localhost:8000/products", {
        text: product.text,
        price: product.price,
        description: product.description,
        show_description: product.show_description,
        image: product.image,
        reminder: product.reminder,
        url: product.url,
        quantity: product.quantity - 1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const calcTotal = (products) => {
    const _total = products.reduce((acc, product) => {
      if (product.reminder) {
        // console.log(`quantity:${product.quantity - 1} price:${product.price}`);
        let prod_total = (product.quantity - 1) * product.price;
        // console.log(`acc: ${acc} prod_total: ${prod_total}`);
        return prod_total + acc;
      } else return acc;
    }, 0);
    // console.log(_total);
    return _total;
  };

  // delete a prod
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  //update products
  const updateProds = () => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateOrders = () => {
    axios
      .get("http://localhost:8000/orders")
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ProdsContext = React.createContext({
    products: [],
    fetchProducts: () => {},
  });
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:8000/products");
    const products = await res.json();
    // console.log(products);
    setProducts(products.data);
  };
  useEffect(() => {
    fetchProducts();
    // setProducts([]); //check
  }, []);

  const OrdersContext = React.createContext({
    orders: [],
    fetchOrders: () => {},
  });
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:8000/orders");

    // const res = await fetch("https://fastserver-sm.herokuapp.com/orders");
    const orders = await res.json();
    // console.log(orders);
    setOrders(orders.data);
  };
  useEffect(() => {
    fetchOrders();
    // setOrders({}); //check
  }, []);

  // updateOrders();
  // updateProds();

  return (
    <Router>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="navbar">
          <NavBar products={products} />
        </div>
        <Header
          title="Shop"
          addProduct={() => setShowAddProduct(!showAddProduct)}
          showAdd={showAddProduct}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddProduct && (
                <AddProduct
                  onAdd={addProduct}
                  updateProds={updateProds}
                  products={products}
                />
              )}
              {products.length > 0 ? (
                <Grid container spacing={1}>
                  {products.map((product) => (
                    <GridProduct
                      key={product._id}
                      product={product}
                      onToggle={toggleReminder}
                      showDesc={toggleDescription}
                      onDelete={deleteProduct}
                      addQuantity={addQuantity}
                      lowerQuantity={lowerQuantity}
                      updateProds={updateProds}
                    />
                  ))}
                </Grid>
              ) : (
                "No products to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        {/* <Route exact path="/stats" component={Stats} /> */}
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              products={products}
              onToggle={toggleReminder}
              onDelete={deleteProduct}
              showDesc={toggleDescription}
              fetchProducts={fetchProducts}
              calcTotal={calcTotal}
            />
          )}
        />
        <Route
          exact
          path="/stats"
          render={(props) => (
            <Stats
              orders={orders}
              updateOrders={updateOrders}
              products={products}
            />
          )}
        />
        <Route
          exact
          path="/home"
          render={(props) => (
            <Home
              products={products}
              onToggle={toggleReminder}
              onDelete={deleteProduct}
              showDesc={toggleDescription}
              addQuantity={addQuantity}
              lowerQuantity={lowerQuantity}
              updateProds={updateProds}
            />
          )}
        />
        <Footer
          showAdd={true}
          updateProds={updateProds}
          calcTotal={calcTotal}
          orders={orders}
          products={products}
          updateOrders={updateOrders}
        />
      </div>
    </Router>
  );
}

export default App;
