import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/cart.css";

const Cart = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    console.log("Contenido del carrito:", cart); // Verifica los datos del carrito

    const handleClearCart = () => {
        if (!cart || cart.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Carrito vacío',
                text: 'No hay productos para eliminar.',
            });
            return;
        }

        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar todo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
                Swal.fire(
                    'Eliminado',
                    'Tu carrito ha sido vaciado.',
                    'success'
                );
            }
        });
    };

    const handleCheckout = () => {
        if (!cart || cart.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Carrito vacío',
                text: 'Agrega productos antes de proceder al pago.',
            });
            return;
        }
        navigate("/checkout");
    };

    // Calcular el total del carrito
    const total = cart && cart.length > 0 ? cart.reduce((sum, item) => sum + (item.price || 0), 0) : 0;

    return (
        <div className="cart-container">
            <h2>
                Tu Carrito
            </h2>
            {(!cart || cart.length === 0) ? (
                <p>
                    Tu carrito está vacío
                </p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item, index) => (
                        <li
                            key={item.id || index}
                            className="cart-item"
                        >
                            <span className="item-name">
                                {item.name || "Sin nombre"}
                            </span>
                            <span className="item-price">
                                {item.price ? `${item.price} $` : "Precio no disponible"}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            {cart && cart.length > 0 && (
                <div className="cart-total">
                    <h3>
                        Total: <span className="total-amount">{total.toFixed(2)} $</span>
                    </h3>
                </div>
            )}
            <div className="cart-buttons">
                <button
                    className="clear-cart-button"
                    onClick={handleClearCart}
                >
                    Eliminar Todo
                </button>
                <button
                    className="checkout-button"
                    onClick={handleCheckout}
                >
                    Pagar Total
                </button>
            </div>
        </div>
    );
};

export default Cart;
