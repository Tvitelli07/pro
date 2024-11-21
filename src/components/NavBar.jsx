import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Niel-Indumentaria
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Inicio
          </Link>
          <Link to="/partes-de-arriba" className="navbar-link">
            Partes de Arriba
          </Link>
          <Link to="/partes-de-abajo" className="navbar-link">
            Partes de Abajo
          </Link>
          <Link to="/zapatillas" className="navbar-link">
            Zapatillas
          </Link>
        </div>
        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            🛒 Carrito ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
