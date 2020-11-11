import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({title, items, match, history, routeName}) => {
    console.log(match)
    return (
        <div className="collection-preview">
            <h1 className="title" >
                <span className="title-link" onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</span>
            </h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item}/>
                        ))
                }
            </div>
        </div>
    );
}

export default withRouter(CollectionPreview);
