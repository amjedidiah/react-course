import { createSelector } from "reselect";
import { reverseObject } from "utils/array.util";

const selectCartReducer = (state) => state.cart;

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartItemsArray = createSelector(
  [selectCartItems],
  (cartItems) => cartItems ? reverseObject(cartItems) : []
);

export const selectCartItemsCount = createSelector(
  [selectCartItemsArray],
  (cartItemsArray) =>
    cartItemsArray.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItemsArray],
  (cartItemsArray) =>
    cartItemsArray.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);
