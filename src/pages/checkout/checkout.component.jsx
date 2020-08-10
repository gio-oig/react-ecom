import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItemsTotalPrice,
  selectCartItems,
} from '../../redux/card/cart.selcetor';

import './checkout.stye.scss';
const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>product</span>
        </div>
        <div className='header-block'>
          <span>description</span>
        </div>
        <div className='header-block'>
          <span>quantity</span>
        </div>
        <div className='header-block'>
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>price {totalPrice}$</div>
    </div>
  );
};
//  state object is passed automatically
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
