import React from 'react';
import Title from './toolbar/Title'
import Menu from './toolbar/Menu'
import AddButton from './toolbar/AddButton'

export default class Toolbar extends React.Component {
    render() {
        return (

            <header className="mdl-layout__header mdl-layout__header--transparent zx-toolbar">

                <div className="mdl-layout__header-row">
                    <Title />

                    <AddButton />

                    <div className="mdl-layout-spacer"></div>

                    <Menu />

                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>


                </div>

            </header>

        )
    }
}