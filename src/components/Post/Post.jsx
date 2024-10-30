import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body}= post;
    const navigate = useNavigate();
    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
        
        
    }
    return (
        <div className='border border-blue-600 p-3 rounded-xl'>
             <h2>User ID: {id}</h2>
             <p>Title: {title}</p>
             <p><small>{body}</small></p>
             {/* <Link to={`/post/${id}`}> <button className='btn'>Show Details</button> </Link>
              */}
            <button onClick={handleShowDetail} className='btn'>Show Details</button>
             
        </div>
    );
};

export default Post;