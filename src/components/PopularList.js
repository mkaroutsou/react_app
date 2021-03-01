import React, {Fragment, useState} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import PopularCard from "./PopularCard";

export function PopularList({popularList}) {
    return (
        <Fragment>
            <h2>POPULAR POSTS</h2>
            <ListGroup>
                {popularList.map((article) => (
                    <ListGroupItem key={article.id}><PopularCard article={article} /></ListGroupItem>
                ))}
            </ListGroup>
        </Fragment>
    );
}

export default PopularList;