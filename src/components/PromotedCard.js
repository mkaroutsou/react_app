import React, {Fragment} from 'react';
import Badge from "react-bootstrap/Badge";

const PromotedCard = ({article}) => {
    const coverImage = article.cover_image!= null ? article.cover_image : '';

    return (
        <Fragment>
            <article style={{ height: 471, backgroundImage: `url(${coverImage})`}}>
                <div className="text-center">
                    <Badge variant="primary">{article.type_of }</Badge>
                    <h2>{article.title}</h2>
                </div>

            </article>
        </Fragment>

    )}


export default PromotedCard;
