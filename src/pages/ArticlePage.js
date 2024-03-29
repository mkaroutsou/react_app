import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import ArticleFull from "../components/ArticleFull";
import {API} from "../api";
import Sidebar from "../components/Sidebar";
import HeroBanner from "../components/HeroBanner";
function ArticlePage() {

    const {id} = useParams()
    const [article, setArticle] = useState([])
    const [isArticleLoading, setIsArticleLoading] = useState(false);
    const [errorArticle, setArticleError] = useState(null);


    useEffect(() => {
        setArticleError(false);
        setIsArticleLoading(true);

        axios.get(`${API}/${id}`)
            .then((response) => {
                setArticle(response.data);
                setIsArticleLoading(false);
            })
            .catch(() => {
                setArticleError(errorArticle);
                setIsArticleLoading(false);
            });
    }, [id]);

    if (errorArticle) {
        return <Alert variant="warning">{errorArticle.message}</Alert>;
    }

    if (isArticleLoading) {
        return <Spinner animation="border" size="lg" />;
    }

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <HeroBanner article={article}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="8">
                        <ArticleFull article={article}/>
                    </Col>
                    <Sidebar category={article.tag}/>
                </Row>
            </Container>
        </React.Fragment>

    )
}

export default ArticlePage;