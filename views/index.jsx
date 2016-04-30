import React from 'react';
import DefaultLayout from './default.jsx';

class Unlogged extends React.Component {
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>Login</h4>
                    <a href="/login">Login</a>
                    <h4>Register</h4>
                    <a href="/register">Register</a>
                </div>
            </div>
        );
    }
}

class AppMain extends React.Component {
    render() {
        return (
            <div className="unlogged-card">
                <script src="/assets/js/localstoragedb.min.js" />
                { !this.props.user ? <Unlogged /> : <script src="/assets/js/bundle.js" /> }
            </div>
        );
    }
}

export default class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div id="app"></div>
                <AppMain user={this.props.user} />
            </DefaultLayout>
        );
    }
}
