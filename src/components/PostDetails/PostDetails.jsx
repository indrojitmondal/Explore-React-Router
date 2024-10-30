import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const posts = useLoaderData();
    const {id, title, body}= posts;
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1);
    }
    const {postId} = useParams();
    console.log(postId);
    return (
        <div>

            <h2>Post ID: {id}</h2>
            <p>Title: {title}</p>
            <p><small> {body} </small></p>
            <button onClick={handleGoBack} className='btn' >Go Back</button>
            
        </div>
    );
};

export default PostDetails;