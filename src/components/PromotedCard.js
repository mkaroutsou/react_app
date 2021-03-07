import React from 'react';
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";

const PromotedCard = ({article}) => {
    const coverImage = article.social_image != null ? article.social_image : 'https://picsum.photos/900/600';

    let tag = null;
    if (typeof(article.tag_list) === 'object' && article.tag_list.length > 0) {
        tag = article.tag_list[0];
    }else if (typeof(article.tags) === 'object' && article.tags.length > 0) {
        tag = article.tags[0];
    }

    return (
        <article style={{height: 471, backgroundImage: `url(${coverImage})`}}>
            <div className="promo-text text-center">
                <Badge variant="primary">{tag}</Badge>
                <h2><Link to={`/post/${article.id}`}>{article.title}</Link></h2>
            </div>
        </article>
    )
}


export default PromotedCard;
