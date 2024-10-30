import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
           <div className='flex gap-4'>
             <Link to='/' >Home</Link>
             <Link to='/users'>Users</Link>
          
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact US</Link>
            
           </div>
        </div>
    );
};

export default Header;