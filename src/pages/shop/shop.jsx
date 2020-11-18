import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsFetching, selectCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends Component {
    
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={ props => (<CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={ props => (<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />)} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionsFetching,
    isCollectionsLoaded: selectCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);