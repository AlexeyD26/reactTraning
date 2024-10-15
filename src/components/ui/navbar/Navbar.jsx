import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
        <nav className='navbar__links'>
            <Link to="/about">О сайте</Link>
            <Link to="/posts">Посты</Link>
        </nav>
    </div>
  );
};

export default NavBar;