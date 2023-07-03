import React from "react";

import "./styles.css";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </div>
    </Router>
  );
}