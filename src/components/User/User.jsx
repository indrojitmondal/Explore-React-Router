import React from 'react';

const User = ({user}) => {
    const {id, name,email, phone}= user;
    return (
        <div className=' border border-yellow-400 p-3 rounded-xl'>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <h2>Phone: {phone}</h2>
        </div>
    );
};

export default User;