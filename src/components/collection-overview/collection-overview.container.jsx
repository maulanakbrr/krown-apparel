import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionOverview from './collection-overview';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

// you can use compose to prevent from pass too many wrapped component
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverview));

export default CollectionOverviewContainer;