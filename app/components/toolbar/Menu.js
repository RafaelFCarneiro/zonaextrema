import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div className="toolbar-menu">

                <a className="fa fa-search" href="/filter">Filter</a>

                <a className="actived fa fa-calendar-check-o" href="/">Today</a>

                <a className="fa fa-bar-chart" href="/charts">Charts</a>

            </div>
        );
    };
};