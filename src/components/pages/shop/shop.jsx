import {Fragment, useState} from 'react';
import CollectionPreview from '../../collection-preview/collection-preview';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
    
    const [collections] = useState(SHOP_DATA);
    
    return (
        <Fragment>
            {
                collections.map( ({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps}/>
                ))
            }
        </Fragment>
    );
}

export default ShopPage;