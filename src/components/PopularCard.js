import React, {Fragment} from 'react';
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PostInfo from "./PostInfo";

const PopularCard = ({article}) => {
    const coverImage = article.cover_image!= null ? article.cover_image : '';

    return (
        <Row className="mb-2">
            <Col className="article-img" xs={4}>
                <Image src={coverImage} fluid/>
            </Col>
            <Col xs={8}>
                <h4><Link to={`/post/${article.id}`}>{article.title}</Link></h4>
                <PostInfo article={article} />
            </Col>
        </Row>

    )}


export default PopularCard;
