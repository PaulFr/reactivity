import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="container">
        <h1>Reactivity Template</h1>
        <p>
            Now you can start your project quickly. <Link to="/infos">More infos</Link>
        </p>
    </div>
);
export default Home;
