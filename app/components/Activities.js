import React from 'react'
import { connect } from 'react-redux'
import ActivitiesList from './activities/List'

export default class Activities extends React.Component {

    render() {

        function mapProps(state) {

            return {
                activities: state.activities
            }
        }

        const SmartActivitiesList = connect(mapProps)(ActivitiesList);

        return (
            <SmartActivitiesList rest={this.props.rest}/>
        )

    }
}