import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const posts = useLoaderData();
    const {id, title, body}= posts;
    return (
        <div>

            <h2>Post ID: {id}</h2>
            <p>Title: {title}</p>
            <p><small> {body} </small></p>
            
        </div>
    );
};

export default PostDetails;