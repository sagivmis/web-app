import { useState, useEffect } from "react";
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

function App() {
  const [orders, setOrders] = useState([
    {
      day: 10,
      time: 2300,
      product_id: [1, 2, 3],
      product_quantity: [1, 0, 0],
      total: 0,
    },
    {
      day: 10,
      time: 2300,
      product_id: [1, 2, 3],
      product_quantity: [1, 3, 0],
      total: 0,
    },
    {
      day: 10,
      time: 2300,
      product_id: [1, 2, 3],
      product_quantity: [1, 3, 3],
      total: 0,
    },
  ]);
  const calcTotal = (orders) => {
    orders.forEach((order) => {
      for (let i = 0; i < order.product_id.length; i++) {
        let product_price_object = products.find(
          (product) => product.id === order.product_id[i]
        );
        order.total += product_price_object.price * order.product_quantity[i];
      }
    });
  };
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      text: "T-shirt",
      price: 12,
      description: "T-shirt",
      showDescription: false,
      image: true,
      reminder: false,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwBh410RwBSiaCOnUjohBG-WRrZjsAtv0BzZ5s-CYFyQUUEcmAYHw03jX8Nz012Gh39LF7Pr1&usqp=CAc",
    },
    {
      id: 2,
      text: "Shoes",
      price: 50,
      description: "Fun shoes",
      showDescription: false,
      image: true,
      reminder: false,
      url: "https://sc04.alicdn.com/kf/HTB1rQWtXo6FK1Jjy0Foq6xHqVXaa.jpg",
    },
    {
      id: 3,
      text: "Coat",
      price: 120,
      description: "Beatiful",
      showDescription: false,
      image: true,
      reminder: false,
      url:
        "https://i5.walmartimages.com/asr/b8591192-d5ae-46d2-ae5d-48ac793bf4c1.295f980b310499033ed8a7fdc4dc3e57.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
  ]);

  //toggle reminder
  const toggleReminder = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, reminder: !product.reminder }
          : product
      )
    );
  };
  //toggle description
  const toggleDescription = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, showDescription: !product.showDescription }
          : product
      )
    );
  };
  //Add product
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newProduct = { id, ...product };
    setProducts([...products, newProduct]);
  };
  //Add order
  const addOrder = (order) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newOrder = { id, ...order };
    setOrders([...orders, newOrder]);
  };
  // delete a prod
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  axios
    .get("http://localhost:8000/products")
    .then((response) => console.log(response))
    .catch((error) => {
      console.error("error");
    });
  return (
    <Router>
      <div className="container">
        {calcTotal(orders)}
        <Header
          title="Shop"
          addProduct={() => setShowAddProduct(!showAddProduct)}
          showAdd={showAddProduct}
          addOrder={addOrder}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddProduct && <AddProduct onAdd={addProduct} />}
              {products.length > 0 ? (
                <Products
                  products={products}
                  onToggle={toggleReminder}
                  onDelete={deleteProduct}
                  showDesc={toggleDescription}
                />
              ) : (
                "No products to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route exact path="/stats" component={Stats} />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              products={products}
              onToggle={toggleReminder}
              onDelete={deleteProduct}
              showDesc={toggleDescription}
              addOrder={addOrder}
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
            />
          )}
        />
        <Footer showAdd={true} />
      </div>
    </Router>
  );
}

export default App;
