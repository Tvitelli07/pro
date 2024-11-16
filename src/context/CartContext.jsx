import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // Agregar un producto al carrito
  const addToCart = (product) => {
    console.log("Producto agregado:", product); // Verifica el producto recibido
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setMessage(`Se agregó "${product.name}" al carrito`);
    setTimeout(() => setMessage(""), 3000); // Mensaje visible por 3 segundos
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Eliminar un producto específico del carrito
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};