import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const showCart = () => setOpen(true);
  const hideCart = () => setOpen(false);

  return (
    <CartContext.Provider value={{ open, showCart, hideCart }}>
      {children}
    </CartContext.Provider>
  );
};