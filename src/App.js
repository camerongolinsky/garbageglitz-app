import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { addProducts } from "./redux/slices/productsSlice";
import { useDispatch } from "react-redux";
import { PRODUCTS } from "./products";
import Header from "./components/layout/header/Header";
import ShoppingCart from "./components/pages/ShoppingCart";
import Products from "./components/pages/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts(PRODUCTS));
  });

  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={ShoppingCart} />
      </Router>
    </div>
  );
}

export default App;
