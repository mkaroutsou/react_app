import React from 'react';

const PostInfo = ({article}) => {
    return (
        <div className="post-info d-flex">
            <div className="author">{article.user.username}</div>
            <div className="date"><i className="far fa-calendar-alt"></i>{article.readable_publish_date}</div>
            <div className="comments"><i className="fas fa-comments"></i>{article.comments_count}</div>
            <div className="likes"><i className="far fa-eye"></i>{article.public_reactions_count}</div>
        </div>
    )}
export default PostInfo;
