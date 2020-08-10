import { createSelector } from 'reselect';

// select needed subobject form state obj { cart }
const selectCart = (state) => state.cart;

// memoizing
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectorCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// memoizing
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
