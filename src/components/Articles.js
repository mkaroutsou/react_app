import React, {Fragment} from 'react';
import {ListGroup} from 'react-bootstrap';

const Articles = ({children}) => (
    <Fragment>
        <h1>Articles</h1>
        <ListGroup>
            {children}
        </ListGroup>
    </Fragment>
)

export default Articles;
