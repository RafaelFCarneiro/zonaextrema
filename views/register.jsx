import React from 'react';
import DefaultLayout from './default.jsx'

export default class Register extends React.Component {
    render() {
        return (

            <DefaultLayout title={this.props.title}>

                <form action="/register" method="post">


                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="username"/>
                        <label className="mdl-textfield__label" for="sample3">Username...</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="email"/>
                        <label className="mdl-textfield__label" for="sample3">Email...</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" name="password"/>
                        <label className="mdl-textfield__label" for="sample4">Password...</label>
                    </div>

                    <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                      <i className="material-icons">add</i>
                    </button>


                </form>

            </DefaultLayout>

        );
    };
};