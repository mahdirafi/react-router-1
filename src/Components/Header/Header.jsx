import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='text-center'>
            <h2>this is Header Section</h2>
           <nav className='flex gap-4 text-2xl font-semibold justify-center text-blue-600'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Mobile'}>Mobile</NavLink>
            <NavLink to={'/Users'}>Users</NavLink>
            <NavLink to={'/Users2'}>Users2</NavLink>
            <NavLink to={'/Posts'}>Posts</NavLink>
           </nav>
        </div>
    );
};

export default Header;