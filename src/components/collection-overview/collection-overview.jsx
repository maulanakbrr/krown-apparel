import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview' ;

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map( ({id, ...otherCollectionsProps}) => (
                <CollectionPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);