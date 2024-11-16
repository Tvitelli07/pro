import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavBar.css";

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <div className="navbar-left">
      <Link className="navbar-brand" to="/">
        Niel-Indumentaria
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/partes-de-arriba">
              Partes de Arriba
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/partes-de-abajo">
              Partes de Abajo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/zapatillas">
              Zapatillas
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="navbar-right">
      <Link className="nav-link" to="/cart">
        <FaShoppingCart /> Carrito ({cart.length})
      </Link>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
