import React from 'react';

import './layout.scss';

const Layout = Component => props => (
    <React.Fragment>
        <Component {...props} />
        <p style={{textAlign:"center"}}>By Paul Frinchaboy</p>
    </React.Fragment>
);
export default Layout;
