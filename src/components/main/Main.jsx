import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const Main = ({ views, defaultLayout }) => (
    <Switch>
        {views.map(({path, component, exact = false, layout = null }) => {
            return (
                <Route
                    key={path}
                    exact={exact}
                    path={path}
                    component={(layout || defaultLayout)(component)}
                />
            );
        })}
    </Switch>
);

Main.propTypes = {
    views: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired,
        exact: PropTypes.bool,
        layout: PropTypes.func
    }).isRequired).isRequired,
    defaultLayout: PropTypes.func.isRequired
};

export default Main;
