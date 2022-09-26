import { createSlice } from "@reduxjs/toolkit";
import { reverseObject } from "utils/array.util";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
    isCartOpen: false,
  },
  reducers: {
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
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

  return cartSlice.actions.updateCartItems({ ...cartItems, [id]: resolution });
};

export const removeFromCart = ({ id, cartItems, removeAll = false }) => {
  const productExists = cartItems[id];
  const resolution =
    productExists?.quantity === 1 || removeAll
      ? undefined
      : {
          ...productExists,
          quantity: productExists.quantity - 1,
        };

  return cartSlice.actions.updateCartItems({ ...cartItems, [id]: resolution });
};

export const clearCart = () => cartSlice.actions.updateCartItems({});

export const { toggleCart } = cartSlice.actions;

export const selectCartIsOpen = (state) => state.cart.isCartOpen;

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemsArray = (state) =>
  state.cart.cartItems ? reverseObject(state.cart.cartItems) : [];

export const selectCartItemsCount = (state) =>
  Object.keys(state.cart.cartItems).reduce(
    (accumulatedQuantity, cartItemKey) =>
      accumulatedQuantity + (state.cart.cartItems[cartItemKey]?.quantity ?? 0),
    0
  );

export const selectCartTotal = (state) =>
  Object.keys(state.cart.cartItems).reduce(
    (accumulatedQuantity, cartItemKey) =>
      accumulatedQuantity +
      (state.cart.cartItems[cartItemKey]?.quantity ?? 0) *
        (state.cart.cartItems[cartItemKey]?.price ?? 0),
    0
  );

export default cartSlice.reducer;
