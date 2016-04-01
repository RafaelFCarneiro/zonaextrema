import ReactDOM from 'react-dom';
import React, {Component} from 'react'
import { connect } from 'react-redux';
import Hammer from 'react-hammerjs'
import Activity from './Activity'

@connect((state) => ({
    rest: state.rest,
    activities: state.activities
}))
export default class List extends Component {

    redo(activity) {
        this.props.activities.data.push(activity)
        this.forceUpdate()
    }

    swipeToRefresh() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.get());
    }

    remove(activity) {

        this.props.activities.data.forEach((item, index, array) => {
            if (item.id === activity.id) array.splice(index, 1)
        })

        this.forceUpdate();

        //debugger;
        //const {dispatch, rest} = this.props;
        //dispatch(rest.actions.activities.delete(activity))


        //dispatch(function(next, getState){
        //
        //    debugger;
        //    //let activity = {"UserId": 1, "KindId": kind.id, "secret": true }
        //    //let state = getState();
        //    //next( state.rest.actions.activities.post(activity) )
        //
        //}.bind(this));

        var snackbarContainer = document.querySelector('.zx-snackbar');
        var data = {
            message: 'Activity removed.',
            timeout: 4000,
            actionHandler: this.redo.bind(this, activity),
            actionText: 'Undo'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.sync());
    }

    render() {

        const Items = this.props.activities.data.map(
            (item) => <Activity key={item.id} activity={item} remove={this.remove.bind(this, item)}/>, this
        )

        return (
            <Hammer vertical={true} onSwipe={this.swipeToRefresh.bind(this)}>
                <div className="mdl-layout__content zx-activities">
                    { Items }
                </div>
            </Hammer>
        )
    }
}