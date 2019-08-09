import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    const activeStyle = {
        color: "F15B2A"
    };

    return (
        <nav className="navbar navbar-default navs">
            <NavLink className="links" to='/' activeStyle={activeStyle} exact>HOME</NavLink>
            <NavLink className="links" to='/about' activeStyle={activeStyle}>ABOUT</NavLink>
            <NavLink className="links" to='/courses' activeStyle={activeStyle}>COURSES</NavLink>
        </nav>
    )
}

export default Header;
