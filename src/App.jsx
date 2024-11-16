
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductSection from "./components/ProductSection";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/partes-de-arriba" element={<ProductSection category="remera" />} />
          <Route path="/partes-de-abajo" element={<ProductSection category="bermuda pantalon" />} />
          <Route path="/zapatillas" element={<ProductSection category="zapatillas" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;