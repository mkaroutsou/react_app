import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import {API} from "../api";
import ArticleList from "../components/ArticleList";
import PromotedList from "../components/PromotedList";
import Sidebar from "../components/Sidebar";


function HomePage() {
    const [promotedList, setPromotedList] = useState([]);
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(false);
        setIsLoading(true);

        axios.get(`${API}`)
            .then((response) => {
                setArticleList(response.data.slice(4));
                setPromotedList(response.data.slice(0, 3));
                setIsLoading(false);
            })
            .catch(() => {
                setError(error);
                setIsLoading(false);
            });
    }, []);


    if (error) {
        return <Alert variant="warning">{error.message}</Alert>;
    }

    if (isLoading) {
        return <Spinner animation="border" size="lg" />;
    }


    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <PromotedList promotedList={promotedList}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="8">
                        <ArticleList articleList={articleList}/>
                    </Col>
                    <Sidebar />
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomePage;