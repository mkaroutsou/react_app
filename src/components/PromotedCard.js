import React from 'react';
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";

const PromotedCard = ({article}) => {
    const coverImage = article.cover_image != null ? article.cover_image : 'https://picsum.photos/900/600';

    return (
        <article style={{height: 471, backgroundImage: `url(${coverImage})`}}>
            <div className="promo-text text-center">
                <Badge variant="primary">{article.type_of}</Badge>
                <h2><Link to={`/post/${article.id}`}>{article.title}</Link></h2>
            </div>
        </article>
    )
}


export default PromotedCard;
