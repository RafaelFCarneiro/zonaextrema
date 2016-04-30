import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rest from './restful';

import Home from './Home';
import Activities from './components/activities/List';
import AddActivity from './components/activities/Grid';
import Filter from './components/Filter';
import Charts from './components/Charts';

import offline from './offline';
import database from './database';

class Root extends Component {

    render() {

        const reducer = combineReducers({
            routing: routerReducer,
            rest: () => rest,
            database: () => database,
            offline: () => offline,
            activities: offline.activities,
            ...rest.reducers
        });

        const store = compose(applyMiddleware(thunkMiddleware, createLogger()))(createStore)(reducer);
        const history = syncHistoryWithStore(browserHistory, store);

        return (
            <div>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={Home}>
                            <IndexRedirect to="/today" />
                            <Route path="add" component={AddActivity} />
                            <Route path="today" component={Activities} />
                            <Route path="filter" component={Filter} />
                            <Route path="charts" component={Charts} />
                        </Route>
                    </Router>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Root  />, document.getElementById('app'));
