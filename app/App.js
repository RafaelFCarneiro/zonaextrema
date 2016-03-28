import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import ActivityAdd from './components/activities/Add'
import Toolbar from './components/Toolbar'
import Activities from './components/Activities'


import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { ReduxRouter, routerStateReducer, reduxReactRouter, pushState } from 'redux-router';
import { Route, Link } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createHistory } from 'history';


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

const reducer = combineReducers({
    router: routerStateReducer,
    ...rest.reducers
});

const store = compose(
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunkMiddleware)
)(createStore)(reducer);

@connect((state) => ({}))
class Home extends Component {
    render() {

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Toolbar />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Root extends Component {
    render() {

        function mapToProps() {
            return { rest: rest }
        }

        const SmartActivities = connect(mapToProps)(Activities)
        const SmartActivityAdd = connect(mapToProps)(ActivityAdd)

        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter>
                        <Route path="/" component={Home}>
                            <Route path="add" component={SmartActivityAdd}/>
                            <Route path="today" component={SmartActivities}/>
                        </Route>
                    </ReduxRouter>
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('app'))