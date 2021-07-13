import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const itemToAdd = action.payload;

      const existItem = state.cartItems.find(
        (cartItem) => cartItem.product === itemToAdd.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.product === existItem.product ? itemToAdd : cartItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, itemToAdd] };
      }

    case CART_REMOVE_ITEM:
      const itemToRemove = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.product !== itemToRemove
        ),
      };

    default:
      return state;
  }
};
