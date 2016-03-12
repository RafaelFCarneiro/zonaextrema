import React from 'react';
import Toolbar from './Toolbar';
import Activities from './Activities';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Toolbar></Toolbar>
                <Activities></Activities>
            </div>
        );
    };
};