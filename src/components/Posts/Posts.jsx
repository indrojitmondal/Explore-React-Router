import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import { key } from 'localforage';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: </h2>
            <p>This is from posts.jsx</p>
            
            <div className='grid grid-cols-3 gap-4  p-3'>
            {
              posts.map( post =>  <Post post={post} key={post.id}
              ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;