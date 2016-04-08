import ReactDOM from 'react-dom';
import React from 'react'
import moment from 'moment'
import Hammer from 'react-hammerjs'
import TagsCard from './TagsCard'

export default class Activity extends React.Component {

    toggle(event) {
        const el = ReactDOM.findDOMNode(this).querySelector(".zx-activity--actions");
        el.style.display = (el.style.display === "" || el.style.display === "none") ? "flex" : "none"
    }

    render() {

        const { activity } = this.props
        const loggedAt = moment(activity.loggedAt)

        const tagCardsId = `TagId&${activity.id}`
        const date = loggedAt.format('HH:mm')
        const day = loggedAt.format('dddd')
        const dayMonth = loggedAt.format('MMMM Do YYYY')

        return (

            <Hammer onPress={this.props.remove}>

                <div className="mdl-shadow--2dp row WEIGHT-ROW" style={{
                    borderLeftColor: activity.Kind.color,
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '15px'
                }}>

                    <div className="zx-activity--actions" style={{
                                        backgroundColor: activity.Kind.color
                                    }}>

                        <button className="mdl-button mdl-js-button mdl-button--raised">
                          Edit
                        </button>

                        <button className="mdl-button mdl-js-button mdl-button--raised">
                          Delete
                        </button>


                    </div>

                    <div onClick={this.toggle.bind(this)} className="kind-info" data-id="{this.props.item.id}">
                        <div className="kind">
                            <a> {activity.Kind.description } </a>
                            <a className="private"> secret </a>
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

                    <TagsCard key={tagCardsId} description={activity.description || ""}/>


                </div>
            </Hammer>
        )
    }

}