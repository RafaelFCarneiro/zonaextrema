import React from 'react';
import DefaultLayout from './default.jsx'

export default class Index extends React.Component {
    render() {
        return (
            <DefaultLayout title={this.props.title}>



                <a href="/login">Login</a>
            </DefaultLayout>
        );
    };
};