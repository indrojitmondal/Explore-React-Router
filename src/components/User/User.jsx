import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name,email, phone}= user;
    return (
        <div className=' border border-yellow-400 p-3 rounded-xl'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <h2>Phone: {phone}</h2>
            <Link to={`/user/${id}`}> <button className='btn'> Show Details</button> </Link>
        </div>
    );
};

export default User;