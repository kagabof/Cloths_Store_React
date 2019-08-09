import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle = {
        color: "F15B2A"
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <NavLink className="nav-link" to='/' activeStyle={activeStyle} exact>HOME</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/about' activeStyle={activeStyle}>ABOUT</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to='/courses' activeStyle={activeStyle}>COURSES</NavLink>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
