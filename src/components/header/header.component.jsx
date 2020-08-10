import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../card-dropdown/card-dropdown.component';

import { selectorCartHidden } from '../../redux/card/cart.selcetor';
import { selectCurentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
);

// state is pased automaticaly in selector functions
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
  hidden: selectorCartHidden,
});

// connect(state,dispatch)(component)
export default connect(mapStateToProps)(Header);
