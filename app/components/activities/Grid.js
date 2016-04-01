import React, {Component} from 'react'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import Kind from "./Kind"

@connect((state) => ({ rest: state.rest, kinds: state.kinds }))
export default class Grid extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.kinds.sync());
    }

    add(kind) {

        const {dispatch, rest} = this.props;
        dispatch(function(next, getState){

            //let activity = {"UserId": 1, "KindId": kind.id, "secret": true }
            //let state = getState();
            //next( state.rest.actions.activities.post(activity) )

            browserHistory.replace("/today")
        }.bind(this));


    }

    render() {

        const Items = this.props.kinds.data.map(
            (kind) => <Kind kind={kind} key={kind.id} handler={this.add.bind(this, kind)} />, this
        );

        return (
            <div className="mdl-layout__content zx-grid">
                { Items }
            </div>
        )

    }

}