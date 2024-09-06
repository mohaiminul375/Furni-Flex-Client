import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product) => {
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
  const removeFromCart = () => {};
  // updateQuantity
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => 
        prevCart.map(item =>
            item._id == productId ? { ...item, quantity: quantity } : item
        )
    );
};
  return (
    <CartContext.Provider value={{ cart, addToCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
