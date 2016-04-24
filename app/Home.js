import React, { Component } from 'react';

import Title from './components/toolbar/Title';
import Menu from './components/toolbar/Menu';
import AddButton from './components/toolbar/AddButton';

export default class Home extends Component {
    render() {

        const menu = <Menu />;

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

                <header className="mdl-layout__header mdl-layout__header--transparent zx-toolbar">

                    <div className="mdl-layout__header-row">
                        <Title />

                        <AddButton />

                        <div className="mdl-layout-spacer"></div>

                        <div className="mdl-layout--large-screen-only">
                            { menu }
                        </div>

                        <div className="mdl-layout-spacer"></div>

                    </div>

                </header>

                <div className="mdl-layout__drawer mdl-layout--small-screen-only">
                    { menu }
                </div>

                <div className="content">
                    {this.props.children}
                </div>

                <div className="mdl-js-snackbar mdl-snackbar zx-snackbar">
                  <div className="mdl-snackbar__text"></div>
                  <button className="mdl-snackbar__action" type="button"></button>
                </div>
            </div>
        );
    }
}
