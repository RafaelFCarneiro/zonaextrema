import React, { Component } from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, bindActionCreators, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import Toolbar from './Toolbar'
import ActivityAdd from './activities/Add'
import Activities from './Activities'

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

class Home extends Component {

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Toolbar ></Toolbar>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default class App extends Component {

    render() {

        const history = browserHistory

        const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore);
        const reducer = combineReducers({
            ...rest.reducers,
            routing: routerReducer
        });
        const store = createStoreWithMiddleware(reducer);

        syncHistoryWithStore(history, store)

        function mapProps(state) {
            return {
                rest: rest
            }
        }

        const SmartActivities = connect(mapProps)(Activities);
        const SmartActivityAdd = connect(mapProps)(ActivityAdd);

        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Home}>
                        <IndexRoute component={SmartActivities}/>
                        <Route path="add" component={SmartActivityAdd}/>
                        <Route path="today" component={SmartActivities}/>
                    </Route>
                </Router>
            </Provider>
        );

    }

}