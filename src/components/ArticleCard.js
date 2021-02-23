import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'


const ArticleCard = ({article}) => {
    const coverImage = article.cover_image!= null ? article.cover_image : '';

    return (
        <Row>
            <Col xs={12}>
                <div className="article-img">
                    <Image src={coverImage} fluid />
                </div>
                <div className="text-center">
                    <Badge variant="primary">{article.type_of }</Badge>
                    <h2>{article.title}</h2>
                    <div className="d-flex justify-content-center">
                        <div className="author">{article.user.username}</div>
                        <div className="date">{article.readable_publish_date}</div>
                        <div className="comments">{article.comments_count}</div>
                        <div className="likes">{article.public_reactions_count}</div>
                    </div>

                    <p>{article.description}</p>
                </div>

            </Col>
        </Row>
)}


export default ArticleCard;
