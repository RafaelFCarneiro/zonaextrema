import React from 'react'
import TagsCard from './TagsCard'
import moment from 'moment'

export default class Activity extends React.Component {

    render() {

        let tagCardsId = "TagId" + this.props.activity.id;
        let date = moment(this.props.activity.loggedAt).format('HH:mm')
        let day = moment(this.props.activity.loggedAt).format('dddd')
        let dayMonth = moment(this.props.activity.loggedAt).format('MMMM Do YYYY')

        return (

            <div className="mdl-shadow--2dp row WEIGHT-ROW" style={{
                borderLeftColor: this.props.activity.Kind.color,
                borderLeftStyle: 'solid',
                borderLeftWidth: '15px',
            }}>

                <div className="kind-info" data-id="{this.props.item.id}">
                    <div className="kind">
                        <a> WEIGHT </a>

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

                <TagsCard key={tagCardsId} description={this.props.activity.description}/>


            </div>
        )
    }

}