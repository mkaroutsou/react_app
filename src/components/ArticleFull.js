import React, {Fragment} from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

const ArticleFull = ({article}) => {
    const coverImage = article.cover_image != null ? article.cover_image : '';

    return (
        <Fragment>
            <article>
                <div className="article-img">
                    <Image src={coverImage} fluid/>
                </div>
                <div className="article-content">
                    <Badge variant="primary">{article.tag_list}</Badge>
                    <h1>{article.title}</h1>

                    {/*<div className="d-flex justify-content-center">*/}
                    {/*    <div className="author">{article.user.username}</div>*/}
                    {/*    <div className="date"><i className="far fa-calendar-alt"></i>{article.readable_publish_date}*/}
                    {/*    </div>*/}
                    {/*    <div className="comments"><i className="fas fa-comments"></i>{article.comments_count}</div>*/}
                    {/*    <div className="likes"><i className="far fa-eye"></i>{article.public_reactions_count}</div>*/}
                    {/*</div>*/}

                    {ReactHtmlParser(article.body_html)}
                </div>
            </article>
        </Fragment>

    )
}

export default ArticleFull;
