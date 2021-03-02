import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
// import Header from "./Header";
// import ArticleList from "./ArticleList";
// import PromotedList from "./PromotedList";
// import PopularList from "./PopularList";
// import RandomPost from "./RandomPost";
// import Footer from "./Footer";
import {useParams, Link} from 'react-router-dom'
import Header from "../components/Header";
import PopularList from "../components/PopularList";
import RandomPost from "../components/RandomPost";
import Footer from "../components/Footer";
import ArticleFull from "../components/ArticleFull";

function ArticlePage() {
    const {id} = useParams()
    const [article, setArticle] = useState([])

    const BASE_URL = 'https://dev.to/api/';

    useEffect(() => {
        axios.get(`${BASE_URL}/articles/${id}`)
            .then((response) => {
                setArticle(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, [id]);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    {/*<PromotedList promotedList={promotedList}/>*/}
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="8">
                        <ArticleFull article={article}/>
                    </Col>
                    <Col md="4">
                        {/*<PopularList popularList={popularList}/>*/}
                        {/*<RandomPost random={random}/>*/}
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Footer/>
                </Row>
            </Container>
        </React.Fragment>

    )

};

export default ArticlePage;