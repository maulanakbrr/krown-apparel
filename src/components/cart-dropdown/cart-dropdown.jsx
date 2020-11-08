import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map( item => (
                    <CartItem key={item.id} item={item}/>
                )) : (
                    <span className="empty-message">Your cart is empty</span>
                )   
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));