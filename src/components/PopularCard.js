import React from 'react';
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import PostInfo from "./PostInfo";

const PopularCard = ({article}) => {
    const coverImage = article.social_image != null ? article.social_image : 'https://picsum.photos/900/600';

    return (
        <Row className="mb-2">
            <Col className="article-img" xs={4}>
                <Image src={coverImage} fluid/>
            </Col>
            <Col xs={8}>
                <h4><Link to={`/post/${article.id}`}>{article.title}</Link></h4>
                <PostInfo article={article}/>
            </Col>
        </Row>

    )
}


export default PopularCard;
