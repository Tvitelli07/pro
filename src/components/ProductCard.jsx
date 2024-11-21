import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `${product.title} se añadió al carrito.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="product-card">
      <img
        src={product.img || "https://via.placeholder.com/250"}
        alt={product.title || "Producto"}
        className="product-image"
      />
      <h4>{product.title || "Producto sin nombre"}</h4>
      <p>{product.description || "Sin descripción"}</p>
      <p>Precio: ${product.price || "No disponible"}</p>
      <div className="product-buttons">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
        <Link to={`/item/${product.id}`} className="details-button">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
