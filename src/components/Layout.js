import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import ArticleList from "./ArticleList";
import PromotedList from "./PromotedList";
import PopularList from "./PopularList";
import RandomPost from "./RandomPost";
import {ApiProvider} from "../calls/get";

function Layout() {
    const [random, setRandom] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [promotedList, setPromotedList] = useState([]);
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        ApiProvider.getPopular().then((result) => {
            setPopularList(result);
        });
    }, [popularList])

    useEffect(() => {
        ApiProvider.getRandom().then((result) => {
            setRandom(result);
        });
    }, [random])

    useEffect(() => {
        ApiProvider.getPromoted().then((result) => {
            setPromotedList(result);
        });
    }, [promotedList])

    useEffect(() => {
        ApiProvider.getAll().then((result) => {
            setArticleList(result);
        });
    },[ArticleList]);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <PromotedList promotedList={promotedList}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="8">
                        <ArticleList articleList={articleList}/>
                    </Col>
                    <Col xs="4">
                        <PopularList popularList={popularList}/>
                        <RandomPost random={random}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <p>"Footer"</p>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Layout;