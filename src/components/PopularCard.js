import React, {Fragment} from 'react';
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";

const PopularCard = ({article}) => {
    const coverImage = article.cover_image!= null ? article.cover_image : '';

    return (
        <Row>
            <Col className="article-img" xs={4}>
                <Image src={coverImage} fluid/>
            </Col>
            <Col xs={8}>
                <h4>{article.title}</h4>
                <div className="d-flex justify-content-center">
                    <div className="author">{article.user.username}</div>
                    <div className="date"><i className="far fa-calendar-alt"></i>{article.readable_publish_date}</div>
                    <div className="comments"><i className="fas fa-comments"></i>{article.comments_count}</div>
                    <div className="likes"><i className="far fa-eye"></i>{article.public_reactions_count}</div>
                </div>
            </Col>
        </Row>

    )}


export default PopularCard;
