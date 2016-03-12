import React from 'react';
import DefaultLayout from './default.jsx'

class Username extends React.Component {
    render() {

        var content;
        var loginOrLogout;
        var user = this.props.user;
        if (user) {
            content = <div>{user.username}</div>;
            loginOrLogout = <a href="/logout">Logout</a>;
        } else {
            loginOrLogout = <a href="/login">Login</a>
        }

        return (
            <div>
                
                {content}
                {loginOrLogout}
            </div>
        );
    }
};

export default class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>
                <Username user={this.props.user}/>
            </DefaultLayout>
        );
    };
};