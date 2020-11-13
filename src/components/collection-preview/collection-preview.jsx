import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import { 
    CollectionPreviewContainer,
    Title,
    TitleLink,
    PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({title, items, match, history, routeName}) => {
    
    return (
        <CollectionPreviewContainer>
            <Title>
                <TitleLink onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</TitleLink>
            </Title>
            <PreviewContainer>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item}/>
                        ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default withRouter(CollectionPreview);
