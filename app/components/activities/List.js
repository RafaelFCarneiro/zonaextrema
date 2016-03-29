import React, {Component} from 'react'
import { connect } from 'react-redux';
import Activity from './Activity'

@connect((state) => ({
    rest: state.rest,
    activities: state.activities
}))
export default class List extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.sync());
    }

    render() {

        const Items = this.props.activities.data.map(
            function (item) {
                return <Activity key={item.id} activity={item}/>
            }
        );

        return (
            <div className="mdl-layout__content zx-activities">
                { Items }
            </div>
        )
    }
}