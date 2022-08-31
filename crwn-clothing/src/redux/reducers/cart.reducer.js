import cartActionTypes from "redux/types/cart.type";

const INITIAL_STATE = {
  cartItems: {},
  isCartOpen: false,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case cartActionTypes.UPDATE_CART:
      return {
        ...state,
        cartItems: payload,
      };
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};

export default cartReducer;
