import React from 'react';
import Title from './toolbar/Title'
import Menu from './toolbar/Menu'
import AddButton from './toolbar/AddButton'

export default class Toolbar extends React.Component {
    render() {
        return (
            <div className="toolbar">
                <Title />
                <AddButton />
                <Menu />
            </div>
        );
    };
};