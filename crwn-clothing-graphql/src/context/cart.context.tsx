import { createContext, useState, useContext, useMemo, useCallback } from "react";
import { CategoryContext, ContextProvider, Product } from "context/category.context";
import { reverseObject } from "utils/array.util";

export interface CartItem extends Product {
  quantity: number;
}

export type CartItems = {
  [key: string]: CartItem;
};

export const CartContext = createContext({
  cartItems: {} as CartItems,
  addToCart: (id: number, category: string) => {},
  removeFromCart: (id: number, removeAll?: boolean) => {},
  clearCart: () => {},
  isCartOpen: false,
  toggleCart: (isCartOpen: boolean) => {},
  cartItemsCount: 0,
  cartItemsArray: [] as CartItem[],
  cartTotal: 0,
});

export const CartProvider = ({ children }: ContextProvider) => {
  const [cartItems, setCartItems] = useState<CartItems>({});
  const [isCartOpen, toggleCart] = useState(false);
  const { categoryMap } = useContext(CategoryContext);

  const addToCart = useCallback( (id: number, category: string) => {
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
  }, [cartItems, categoryMap]);

  const removeFromCart = useCallback( (id: number, removeAll = false) => {
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
  }, [cartItems]);

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
