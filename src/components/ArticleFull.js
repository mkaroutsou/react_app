import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import PostInfo from "./PostInfo";

const ArticleFull = ({article}) => {
    const coverImage = article.social_image != null ? article.social_image : 'https://picsum.photos/900/600';

    let tag = null;
    if (typeof(article.tag_list) === 'object' && article.tag_list.length > 0) {
       tag = article.tag_list[0];
    }else if (typeof(article.tags) === 'object' && article.tags.length > 0) {
       tag = article.tags[0];
    }

    return (
        <article className="article-full">
            <div className="article-img">
                <Image src={coverImage} fluid/>
            </div>
            <div className="article-content">
                <Badge variant="primary">{tag}</Badge>
                <h2>{article.title}</h2>
                <PostInfo article={article}/>
                <div className="article-body">
                    {ReactHtmlParser(article.body_html)}
                </div>
            </div>
        </article>
    )
}

export default ArticleFull;
