import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Title extends Component {
    render() {
        return (
            <div className="zx-toolbar-title">

                <Link className="zx-toolbar-logo" to="/">
                    <img src="/assets/images/biologo.png" alt="Biohacking"/>
                </Link>


                <div className="zx-toolbar-info">
                    <Link className="zx-toolbar-info-name" to="/">Biohacking</Link>
                    <div className="zx-toolbar-info-logout">
                        <Link to="/logout">Log Out</Link>
                    </div>
                </div>

            </div>
        );
    };
};