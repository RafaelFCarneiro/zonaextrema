import React from 'react';

import Toolbar from './Toolbar'
import Activities from './Activities'
import ActivityAdd from './activities/Add'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


class Home extends React.Component {

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Toolbar ></Toolbar>
                {this.props.children}
            </div>
        )

    }
}

export default class App extends React.Component {

    render() {

        const history = browserHistory

        return (
            <div>
                <Router history={history}>
                    <Route path="/" component={Home}>
                        <IndexRoute path="/today" component={Activities}/>
                        <Route path="add" component={ActivityAdd}/>
                        <Route path="today" component={Activities}/>
                    </Route>
                </Router>
            </div>
        );

    };
};