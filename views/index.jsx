import React from 'react';
import DefaultLayout from './default.jsx'

class AppMain extends React.Component {
    render() {
        var user = this.props.user;
        var login;
        var register;
        var bundle;

        if (user) {
            bundle = <script src="/assets/js/bundle.js" />
        } else {
            login = <a href="/login">Login</a>;
            register = <a href="/register">Register</a>;
        }

        return (
            <div>
                {bundle}
                {login}
                <br/>
                {register}
            </div>
        );
    }
};

export default class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <div id="app"></div>
                <AppMain user={this.props.user}/>
            </DefaultLayout>
        );
    };
};