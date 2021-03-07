import React from 'react';
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import {Link} from "react-router-dom";

export function RandomPost({random}) {
    if (random) {
        const coverImage = random.social_image != null ? random.social_image : 'https://picsum.photos/900/600';

        let tag = null;
        if (typeof(random.tag_list) === 'object' && random.tag_list.length > 0) {
            tag = random.tag_list[0];
        }else if (typeof(random.tags) === 'object' && random.tags.length > 0) {
            tag = random.tags[0];
        }

        return (
            <div className="side-block random">
                <h2>RANDOM POST</h2>
                <div className="random" key={random.id}>
                    <div className="article-img">
                        <Link to={`/post/${random.id}`}><Image src={coverImage} fluid/></Link>
                        <Badge variant="primary">{tag}</Badge>
                    </div>
                    <h4><Link to={`/post/${random.id}`}>{random.title}</Link></h4>
                </div>
            </div>
        );
    } else {
        return ('');
    }
}

export default RandomPost;