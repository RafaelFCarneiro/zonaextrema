import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import Home from './home.js';
import Activities from './components/activities/list.js';
import AddActivity from './components/activities/grid.js';

class Root extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRedirect to="/today" />
                <Route path="add" component={AddActivity} />
                <Route path="today" component={Activities} />
            </Route>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));
