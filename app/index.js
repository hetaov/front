import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//import { schema } from './models';
import { schema } from './mymodels';
import { selectedUserIdReducer } from './reducers';
//import bootstrap from './bootstrap';
import bootstrap from './mybootstrap';
import MyApp from './myapp';

const middlewares = [createLogger(), thunk];

/*
const rootReducer = combineReducers({
    orm: schema.reducer(),
    selectedUserId: selectedUserIdReducer,
});
*/

const rootReducer = combineReducers({
    orm: schema.reducer()
});

// We're using `redux-logger`. Open up the console in the demo and you can inspect
// the internal state maintained by Redux-ORM.
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(rootReducer, bootstrap(schema));

function main() {
    // In the repo, we have a simple index.html that includes Bootstrap CSS files
    // and a div element with id `app`.
    const app = document.getElementById('app');
    ReactDOM.render((
        <Provider store={store}>
            <MyApp />
        </Provider>
    ), app);
}

main();
