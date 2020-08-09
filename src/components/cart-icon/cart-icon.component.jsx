import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/card/cart.actions';
import { selectCartItemsCount } from '../../redux/card/cart.selcetor';

import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  // check if itemCount is memoised
  itemCount: selectCartItemsCount(state),
});

// connect(state,dispatch)(component)
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
