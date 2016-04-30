import React, {Component} from 'react';
import { connect } from 'react-redux';
import { async } from 'redux-api';
import Hammer from 'react-hammerjs';
import Activity from './Activity';

@connect((state) => ({
    rest: state.rest,
    activities: state.activities,
    offline: state.offline
}))
export default class List extends Component {

    componentDidMount() {
        const {dispatch, offline} = this.props;

        const callback = () => dispatch( offline.action('activities/sync', {
          component: this
        }) );
        dispatch( offline.action('activities/list', {}, callback) );

    }

    swipeToRefresh() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.get());
    }

    redo(activity) {
      const {dispatch, rest} = this.props;

      let action = (cb)=> rest.actions.activities.post({}, { body: JSON.stringify(activity) }, cb);

      async(dispatch, action, rest.actions.activities.get);

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

    secret(activity) {
      const {dispatch, rest} = this.props;

      let action = (cb)=> rest.actions.activities.put({ id: activity.id, secret: false }, cb);

      async(dispatch, action, rest.actions.activities.get);

    }

    render() {

        const removeHandler = (item) => this.remove.bind(this, item);
        const secretHandler = (item) => this.secret.bind(this, item);

        const swipeHandler = this.swipeToRefresh.bind(this);

        const Items = this.props.activities.data.map(
            (item) => <Activity key={item.ID} activity={item} secret={secretHandler(item)} remove={removeHandler(item)} />, this
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
