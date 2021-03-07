import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API} from "../api";
import {Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom'
import ArticleList from "../components/ArticleList";
import PromotedList from "../components/PromotedList";
import Sidebar from "../components/Sidebar";

function CategoryPage() {
    const {tag} = useParams()
    const [categoryList, setCategoryList] = useState([])
    const [categoryPromotedList, setCategoryPromotedList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setError(false);
        setIsLoading(true);

        axios.get(`${API}?tag=${tag}`)
            .then((response) => {
                setCategoryList(response.data.slice(3));
                setCategoryPromotedList(response.data.slice(0, 3));
                setIsLoading(false);
            })
            .catch(() => {
                setError(error);
                setIsLoading(false);
            });

    }, [tag]);

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
                    <PromotedList promotedList={categoryPromotedList}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="8">
                        <ArticleList articleList={categoryList}/>
                    </Col>
                    <Sidebar category={tag}/>
                </Row>
            </Container>
        </React.Fragment>

    )
}

export default CategoryPage;