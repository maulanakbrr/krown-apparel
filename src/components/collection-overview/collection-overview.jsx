import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview' ;

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionOverviewContainer } from './collection-overview.styles';
import './collection-overview.scss';

const CollectionOverview = ({collections}) => {
    return(
        <CollectionOverviewContainer>
            {
                collections.map( ({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps}/>
                ))
            }
        </CollectionOverviewContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);