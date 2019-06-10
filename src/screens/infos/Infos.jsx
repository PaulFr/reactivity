import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <h1>Reactivity Template</h1>
        <p>It comes with :</p>
        <ul>
            <li>React Router</li>
            <li>React Helmet</li>
            <li>React Redux</li>
            <li>Redux Thunk</li>
            <li>Jest</li>
            <li>Axios</li>
            <li>Lodash</li>
        </ul>
        <p>
            <Link to="/">Back to homepage</Link>
        </p>
    </div>
);
export default Home;
