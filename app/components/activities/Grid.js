import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Kind from './Kind';
import { async } from 'redux-api';

@connect((state) => ({rest: state.rest, kinds: state.kinds}))
export default class Grid extends React.Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.kinds.sync());
    }

    add(kind) {

        const {dispatch, rest} = this.props;

        const now = new Date;
        const activity = {
            'UserId': 1,
            'KindId': kind.id,
            'description': '',
            'secret': true,
            'loggedAt': now
        };

        async(dispatch,
            (cb)=> rest.actions.activities.post( {}, { body: JSON.stringify(activity) }, cb ),
            rest.actions.activities.get
        ).then(()=> browserHistory.replace('/today'));

    }

    render() {

        const addHandler = (kind) => this.add.bind(this, kind);

        const kinds = this.props.kinds.data.map(
            (kind) => <Kind kind={kind} key={kind.id} handler={addHandler(kind)} />, this
        );

        return (
            <div className="mdl-layout__content zx-grid">
                { kinds }
            </div>
        );

    }

}