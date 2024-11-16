// Checkout.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import "../styles/Checkout.css";


const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cart,
      total: cart.reduce((acc, item) => acc + parseFloat(item.price), 0),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Order created! ID: ${docRef.id}`);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
