import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem} from '../../redux/cart/cart.actions';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import './collection-item.scss';

const CollectionItem = ({item, addItem, currentUser}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            {
                currentUser ? 
                <CustomButton className='custom-button' inverted onClick={() => addItem(item)}> Add to cart </CustomButton> :
                null
            }            
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);