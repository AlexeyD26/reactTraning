import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const NavBar = () => {
  return (
    <div className={style.navbar}>
        <nav className={style.navbarLinks}>
            <Link to="/about">О сайте</Link>
            <Link to="/posts">Посты</Link>
        </nav>
    </div>
  );
};

export default NavBar;