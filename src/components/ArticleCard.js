import React from 'react';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";
import PostInfo from "./PostInfo";

const ArticleCard = ({article}) => {
    const coverImage = article.cover_image != null ? article.cover_image : 'https://picsum.photos/900/600';
    const tag = article.tag_list ? article.tag_list[0] : '';

    return (
        <article className="article-teaser">
            <div className="article-img">
                <Image src={coverImage} fluid/>
            </div>
            <div className="text-center">
                <Badge variant="primary">{tag}</Badge>
                <h2><Link to={`/post/${article.id}`}>{article.title}</Link></h2>
                <PostInfo article={article}/>
                <p>{article.description}</p>
            </div>
            <div className="read-more text-right">
                <Link to={`/post/${article.id}`}>READ MORE <i className="fas fa-chevron-right"></i></Link>
            </div>
        </article>

    )
}

export default ArticleCard;
