import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
    rootReducer,
    devToolsEnhancer(
        middleware
    )
);

export default store;