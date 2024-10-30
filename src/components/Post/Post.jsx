import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body}= post;
    return (
        <div className='border border-blue-600 p-3 rounded-xl'>
             <h2>User ID: {id}</h2>
             <p>Title: {title}</p>
             <p><small>{body}</small></p>
             <Link to={`/post/${id}`}> <button className='btn'>Show Details</button> </Link>
        </div>
    );
};

export default Post;