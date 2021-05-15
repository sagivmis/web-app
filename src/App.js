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

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  let [_products, _setProducts] = useState([
    {
      id: 1,
      text: "T-shirt",
      price: 12,
      description: "T-shirt",
      showDescription: false,
      image: true,
      reminder: false,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwBh410RwBSiaCOnUjohBG-WRrZjsAtv0BzZ5s-CYFyQUUEcmAYHw03jX8Nz012Gh39LF7Pr1&usqp=CAc",
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
      url: "https://i5.walmartimages.com/asr/b8591192-d5ae-46d2-ae5d-48ac793bf4c1.295f980b310499033ed8a7fdc4dc3e57.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    },
  ]);
  const [_orders, set_Orders] = useState([
    {
      id: 1,
      date: "2021-05-14",
      total: 255,
      item_ids: [1, 2, 3],
      quantity: { 1: 1, 2: 1, 3: 1 },
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
          ? { ...product, show_description: !product.show_description }
          : product
      )
    );
  };
  //toggle description
  const toggleDescriptionOrder = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, showDescription: !order.showDescription }
          : order
      )
    );
  };

  const lowerQuantity = (prod) => {
    const id = prod.id;
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    console.log(products[0].quantity);
  };
  const addQuantity = (prod) => {
    const id = prod.id;
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    console.log(products[0].quantity);
  };
  //Add product
  const addProduct = (product) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    const id = products.length + 1;
    const newProduct = { id, ...product };
    axios
      .post("http://localhost:8000/products", {
        id: id,
        text: product.text,
        price: product.price,
        description: product.description,
        show_description: product.show_description,
        image: product.image,
        reminder: product.reminder,
        url: product.url,
        quantity: product.quantity,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // setProducts([...products, newProduct]);
  };

  const calcTotal = (products) => {
    const _total = products.reduce((acc, product) => {
      // console.log(product);
      if (product.reminder) {
        console.log(`quantity:${product.quantity} price:${product.price}`);
        let prod_total = product.quantity * product.price;
        console.log(`acc: ${acc} prod_total: ${prod_total}`);
        return prod_total + acc;
      } else return acc;
    }, 0);
    console.log(_total);
    return _total;
  };
  // delete a prod
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
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
    setProducts(products.data);
  };
  useEffect(() => {
    fetchProducts();
    setProducts({}); //check
  }, []);

  const OrdersContext = React.createContext({
    orders: [],
    fetchOrders: () => {},
  });
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:8000/orders");
    const orders = await res.json();
    setOrders(orders.data);
  };
  useEffect(() => {
    fetchOrders();
    setOrders({}); //check
  }, []);
  // console.log(orders);

  // console.log(products);
  return (
    <Router>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="navbar">
          <NavBar />
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
                <Products
                  products={products}
                  onToggle={toggleReminder}
                  onDelete={deleteProduct}
                  showDesc={toggleDescription}
                  updateProds={updateProds}
                  ProdsContext={ProdsContext}
                />
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
