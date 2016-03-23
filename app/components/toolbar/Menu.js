import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Menu extends Component {
    render() {
        return (
            <div className="toolbar-menu">

                <Link activeClassName="actived" className="fa fa-search" to="/add">Filter</Link>
                <Link activeClassName="actived" className="fa fa-calendar-check-o" to="/today">Today</Link>
                <Link activeClassName="actived" className="fa fa-bar-chart" to="/charts">Charts</Link>

            </div>
        );
    };
};