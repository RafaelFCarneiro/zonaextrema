import React from 'react';

import Toolbar from './Toolbar'
import Activities from './Activities'

export default class App extends React.Component {

    render() {


        const activities = <Activities></Activities>

        const toolbar = <Toolbar ></Toolbar>

        return (
            <div>
                {toolbar}
                {activities}
            </div>
        );

    };
};