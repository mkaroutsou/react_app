import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API} from "../api";
import {Container, Row, Col} from 'react-bootstrap';
import {useParams, Link} from 'react-router-dom'
import Header from "../components/Header";
import PopularList from "../components/PopularList";
import RandomPost from "../components/RandomPost";
import Footer from "../components/Footer";
import ArticleList from "../components/ArticleList";
import PromotedList from "../components/PromotedList";

function CategoryPage() {
    const {tag} = useParams()
    const [categoryList, setCategoryList] = useState([])
    const [categoryPopularList, setCategoryPopularList] = useState([])
    const [categoryPromotedList, setCategoryPromotedList] = useState([])
    const [categoryRandom, setCategoryRandom] = useState([]);



    useEffect(() => {
        axios.get(`${API}?tag=${tag}`)
            .then((response) => {
                setCategoryList(response.data.slice(3));
                setCategoryPromotedList(response.data.slice(0, 3));
                setCategoryRandom(response.data[Math.floor(Math.random() * response.data.length)]);
            })
            .catch(error => console.error(`Error: ${error}`));

        axios.get(`${API}?tag=${tag}&top=7`)
            .then((response) => {
                setCategoryPopularList(response.data.slice(0,3));
            })
            .catch(error => console.error(`Error: ${error}`));
    }, [tag]);



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
                    <Col md="4">
                        <PopularList popularList={categoryPopularList}/>
                        <RandomPost random={categoryRandom}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    )

};

export default CategoryPage;