import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview' ;

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collection-overview.scss';

const CollectionOverview = ({collections}) => {
    console.log(collections);
    return(
        <div className="collection-overview">
            {
                collections.map( ({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps}/>
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);