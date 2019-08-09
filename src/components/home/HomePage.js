import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className="jumbotron">
        <h1>K.O.S</h1>
        <p>Welcome to our online courses</p>
        <Link to="about" className="btn btn-success btn-lg">
            Learn more
        </Link>
    </div>
);

export default HomePage;