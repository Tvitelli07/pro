import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { saveOrderToFirestore } from "../utils/saveOrderToFirestore";
import Swal from "sweetalert2";
import "../styles/Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos",
      });
      return;
    }

    try {
      const orderId = await saveOrderToFirestore(buyer, cart);
      Swal.fire({
        icon: "success",
        title: "Compra exitosa",
        text: `Tu orden ha sido creada con el ID: ${orderId}`,
      });
      clearCart(); // Vaciar el carrito
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo completar la compra",
      });
    }
  };

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleInputChange}
        />
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
