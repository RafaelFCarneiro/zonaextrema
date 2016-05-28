import React from 'react';
import { Link } from 'react-router';

export default class AddButton extends React.Component {
    render() {
        return (
            <div>

                <Link className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored zx-add-button" to="/add">
                    <i className="material-icons">add</i>
                </Link>

            </div>
        );
    }
}