import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="mdl-navigation zx-toolbar-menu">
                <Link activeClassName="actived" className="mdl-navigation__link fa fa-search" to="/filter">Filter</Link>
                <Link activeClassName="actived" className="mdl-navigation__link fa fa-calendar-check-o" to="/today">Today</Link>
                <Link activeClassName="actived" className="mdl-navigation__link fa fa-bar-chart" to="/charts">Charts</Link>
            </nav>
        );
    }
}