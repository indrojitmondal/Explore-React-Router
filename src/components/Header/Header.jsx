import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
           <nav className='flex gap-4'>
            <NavLink to='/'>Home </NavLink>
             {/* <Link to='/' >Home</Link> */}
             {/* <Link to='/users'>Users</Link> */}
             <NavLink to='/users'>Users </NavLink>

             {/* <Link to='/posts'>Posts</Link> */}
             <NavLink to='/posts'>Posts </NavLink>
          
            {/* <Link to='/about' >About</Link> */}
            <NavLink to='/about'>About </NavLink> 
            {/* <Link to='/contact' >Contact US</Link> */}
            <NavLink to='/contact'>Contact US </NavLink> 
            
            
           </nav>
        </div>
    );
};

export default Header;