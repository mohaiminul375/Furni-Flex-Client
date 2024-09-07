import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product) => {
    toast.success('add to cart successfully')
    setCart((prevCart) => {
      const productExisted = prevCart?.find((item) => item._id === product._id);
      if (productExisted) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // remove from cart
  const removeFromCart = (productId) => {
    toast.success('deleted from cart successfully')
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };
  // updateQuantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id == productId ? { ...item, quantity: quantity } : item
      )
    );
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
