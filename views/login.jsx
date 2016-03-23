import React from 'react';
import DefaultLayout from './default.jsx'

export default class Login extends React.Component {
    render() {
        return (

            <DefaultLayout title={this.props.title}>

                <div className="card-login mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__supporting-text">


                        <form action="/login" method="post">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" name="username"/>
                                <label className="mdl-textfield__label" for="sample3">Username...</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="password" name="password"/>
                                <label className="mdl-textfield__label" for="sample4">Password...</label>
                            </div>

                            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                              Login
                            </button>

                        </form>


                    </div>
                </div>


            </DefaultLayout>

        );
    };
};