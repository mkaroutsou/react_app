import React, {Fragment, useState} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import PopularCard from "./PopularCard";

export function PopularList({popularList}) {
    if (popularList.length > 0) {
        return (
            <Fragment>
                <h2>POPULAR POSTS</h2>
                <ListGroup>
                    {popularList.map((article) => (
                            <div key={article.id}>
                                <PopularCard article={article}/>
                            </div>
                        )
                    )}
                </ListGroup>
            </Fragment>
        );
    }else{
        return (<h2>No articles</h2>)
    }
}

export default PopularList;