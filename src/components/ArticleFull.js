import React, {Fragment} from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import PostInfo from "./PostInfo";

const ArticleFull = ({article}) => {
    const coverImage = article.cover_image != null ? article.cover_image : 'https://picsum.photos/900/600';

    return (
            <article className="article-full">
                <div className="article-img">
                    <Image src={coverImage} fluid/>
                </div>
                <div className="article-content">
                    <Badge variant="primary">{article.tag_list}</Badge>
                    <h1>{article.title}</h1>

                    <PostInfo article={article} />

                    {ReactHtmlParser(article.body_html)}
                </div>
            </article>
    )
}

export default ArticleFull;
