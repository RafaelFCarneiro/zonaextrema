import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

export default class Menu extends Component {
    render() {
        return (
            <div className="toolbar-menu">

                <Link className="fa fa-search" to="/add">Filter</Link>
                <Link className="actived fa fa-calendar-check-o" to="/">Today</Link>
                <Link className="fa fa-bar-chart" to="/charts">Charts</Link>

            </div>
        );
    };
};