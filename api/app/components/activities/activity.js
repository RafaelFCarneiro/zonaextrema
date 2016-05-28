import ReactDOM from 'react-dom';
import React from 'react';
import moment from 'moment';
import Hammer from 'react-hammerjs';
import TagsCard from './tags';

export default class Activity extends React.Component {

    toggle() {
        const el = ReactDOM.findDOMNode(this).querySelector('.zx-activity--actions');
        el.style.display = (el.style.display === '' || el.style.display === 'none') ? 'flex' : 'none';
    }

    render() {

        const { activity } = this.props;

        const editHandler = (tags) => {
          activity.description = tags;
          this.props.editHandler(activity);
        };

        const { description } = activity;
        const loggedAt = moment(activity.loggedAt);

        const tagCardsId = `TagId&${activity.id}`;
        const date = loggedAt.format('HH:mm');
        const day = loggedAt.format('dddd');
        const dayMonth = loggedAt.format('MMMM Do YYYY');

        const backgroundConf = {
            backgroundColor: activity.Kind.color
        };
        const styleConfig = {
            borderLeftColor: activity.Kind.color,
            borderLeftStyle: 'solid',
            borderLeftWidth: '15px'
        };

        const toggleHandler = this.toggle.bind(this);
        const removeHandler = this.props.remove;
        const secretHandler = this.props.secret;

        const secret = (activity.secret)?
        <a className="private" onClick={secretHandler}> secret </a> : '';

        return (

            <Hammer onPress={removeHandler}>

                <div className="mdl-shadow--2dp row WEIGHT-ROW" style={styleConfig}>

                    <div className="zx-activity--actions" style={backgroundConf}>

                        <button className="mdl-button mdl-js-button mdl-button--raised">
                            Edit
                        </button>

                        <button className="mdl-button mdl-js-button zx-activity--actions--delete">
                            Delete
                        </button>

                    </div>

                    <div className="kind-info">
                        <div className="kind">
                            <a> {activity.Kind.description } </a>
                            {secret}
                        </div>
                        <div className="date">
                            { date }
                            <div className="mdl-cell--hide-phone day">
                                { day }
                            </div>
                            <div className="day-month">
                                { dayMonth }
                            </div>
                        </div>
                    </div>

                    <TagsCard key={tagCardsId} editHandler={editHandler} description={description || ''} />

                </div>
            </Hammer>
        );
    }

}
