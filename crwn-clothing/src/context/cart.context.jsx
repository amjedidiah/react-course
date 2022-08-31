import { createContext, useState, useContext, useMemo } from "react";
import { CategoryContext } from "context/category.context";
import { reverseObject } from "utils/array.util";

export const CartContext = createContext({
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  isCartOpen: false,
  toggleCart: () => {},
  cartItemsCount: 0,
  cartItemsArray: [],
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, toggleCart] = useState(false);
  const { categoryMap } = useContext(CategoryContext);

  const addToCart = (id, category) => {
    const product = categoryMap[category].find(
      (product) => product.id === id
    );
    const productExists = cartItems[id];
    if (productExists) {
      setCartItems({
        ...cartItems,
        [id]: {
          ...productExists,
          quantity: productExists.quantity + 1,
        },
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          ...product,
          quantity: 1,
        },
      });
    }
  };

  const removeFromCart = (id, removeAll = false) => {
    const productExists = cartItems[id];
    if (productExists.quantity === 1 || removeAll) {
      setCartItems({ ...cartItems, [id]: undefined });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          ...productExists,
          quantity: productExists.quantity - 1,
        },
      });
    }
  };

  const clearCart = () => setCartItems({});

  const cartItemsCount = useMemo(() => {
    return reverseObject(cartItems).reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
  }, [cartItems]);

  const cartItemsArray = useMemo(() => {
    return reverseObject(cartItems);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItemsArray.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  } , [cartItemsArray]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
        cartItemsCount,
        cartItemsArray,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
