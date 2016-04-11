import React, {Component} from 'react';
import { connect } from 'react-redux';
import { async } from 'redux-api';
import Hammer from 'react-hammerjs';
import Activity from './Activity';

@connect((state) => ({
    rest: state.rest,
    activities: state.activities
}))
export default class List extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.sync());
    }

    swipeToRefresh() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.get());
    }

    remove(activity) {

        const {dispatch, rest} = this.props;

        let action = (cb)=> rest.actions.activities.delete({id:activity.id}, cb);

        async(dispatch, action, rest.actions.activities.get);

        var snackbarContainer = document.querySelector('.zx-snackbar');
        var data = {
            message: 'Activity removed.',
            timeout: 4000,
            actionHandler: this.redo.bind(this, activity),
            actionText: 'Undo'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }

    render() {

        const removeHandler = (item) => this.remove.bind(this, item);
        const swipeHandler = this.swipeToRefresh.bind(this);

        const Items = this.props.activities.data.map(
            (item) => <Activity key={item.id} activity={item} remove={removeHandler(item)} />, this
        );

        return (
            <Hammer vertical onSwipe={swipeHandler}>
                <div className="mdl-layout__content zx-activities">
                    { Items }
                </div>
            </Hammer>
        );

    }

}