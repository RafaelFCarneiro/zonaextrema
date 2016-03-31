import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';

import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Home from './Home'

import Activities from './components/activities/List'
import AddActivity from './components/activities/Grid'

import ActivitiesReducers from "./reducers/Activities"

const rest = reduxApi({
    activities: {
        url: `/activities`
        , crud: true
        , transformer: transformers.array
    },
    kinds: {
        url: `/kinds`
        , crud: true
        , transformer: transformers.array
    }
}).use("fetch", (url, options) => fetch(url, options).then((resp)=> resp.json()));


class Root extends Component {
    render() {

        const reducer = combineReducers({
            routing: routerReducer,
            rest: function () {
                return rest
            },
            addActivity: ActivitiesReducers,
            ...rest.reducers
        });

        const store = compose(applyMiddleware(thunkMiddleware))(createStore)(reducer);
        const history = syncHistoryWithStore(browserHistory, store)

        return (
            <div>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={Home}>
                            <IndexRedirect to="/today"/>
                            <Route path="add" component={AddActivity}/>
                            <Route path="today" component={Activities}/>
                        </Route>
                    </Router>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Root  />, document.getElementById('app'))