import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Col, Alert, Spinner} from 'react-bootstrap';
import {API} from "../api";
import PopularList from "../components/PopularList";
import RandomPost from "../components/RandomPost";
import {useParams} from "react-router-dom";

function Sidebar() {
    const [random, setRandom] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [isSidebarLoading, setIsSidebarLoading] = useState(false);
    const [errorSidebar, setErrorSidebar] = useState(null);
    const {tag} = useParams()

    useEffect(() => {
        setErrorSidebar(false);
        setIsSidebarLoading(true);
        let unmounted = false;

        let apiCall = (tag) ? `${API}?top=7&tag=${tag}` : `${API}?top=7`;
        axios.get(apiCall)
            .then((response) => {
                if (!unmounted) {
                    setPopularList(response.data.slice(0, 3));
                    setRandom(response.data[Math.floor(Math.random() * response.data.length)]);
                    setIsSidebarLoading(false);
                }

            })
            .catch(() => {
                setErrorSidebar(errorSidebar)
                setIsSidebarLoading(false);
            });
        return () => {
            unmounted = true
        }
    }, [])

    if (errorSidebar) {
        return <Alert variant="warning">{errorSidebar.message}</Alert>;
    }

    if (isSidebarLoading) {
        return <Spinner animation="border" size="lg"/>;
    }

    return (
        <React.Fragment>
            <Col md="4">
                <PopularList popularList={popularList}/>
                <RandomPost random={random}/>
            </Col>
        </React.Fragment>
    )
}

export default Sidebar;