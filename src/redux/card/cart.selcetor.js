import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// memoizing
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// memoizing
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
