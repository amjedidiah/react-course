import cartActionTypes from "redux/types/cart.type";

const updateCartItems = (cartItems) => ({
  type: cartActionTypes.UPDATE_CART,
  payload: cartItems,
});

export const addToCart = ({ id, category, categoryMap, cartItems }) => {
  const product = categoryMap[category].find((product) => product.id === id);
  const productExists = cartItems[id];
  const resolution = productExists
    ? {
        ...productExists,
        quantity: productExists.quantity + 1,
      }
    : { ...product, quantity: 1 };

  return updateCartItems({ ...cartItems, [id]: resolution });
};

export const removeFromCart = ({ id, cartItems, removeAll = false }) => {
  const productExists = cartItems[id];
  const resolution =
    productExists.quantity === 1 || removeAll
      ? undefined
      : {
          ...productExists,
          quantity: productExists.quantity - 1,
        };

  return updateCartItems({ ...cartItems, [id]: resolution });
};

export const clearCart = () => updateCartItems({});

export const toggleCart = () => ({ type: cartActionTypes.TOGGLE_CART });
