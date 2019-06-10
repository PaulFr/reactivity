import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';

import './index.scss';

import Main from './components/main/Main';
import Layout from './screens/layout/Layout';
import Routes from './routes';
import store from './store';

const App = () => {
    return (
        <Main views={Routes} defaultLayout={Layout} />
    );
};

render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('app')
);
