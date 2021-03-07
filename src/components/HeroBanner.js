import React from 'react';
import {Container} from "react-bootstrap";

const HeroBanner = ({article}) => {
    const bannerImage = article.cover_image != null ? article.cover_image : 'https://picsum.photos/1600/600';
    return (
        <div className="hero-banner mb-3" style={{backgroundImage: `url(${bannerImage})`}}>
            <Container>
                <h1>{article.title}</h1>
            </Container>
        </div>
    )
}

export default HeroBanner;
