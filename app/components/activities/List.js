import React, {Component} from 'react'
import KindPanelItem from './KindPanelItem'

export default class List extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.activities.sync());
    }

    render() {

        const Items = this.props.activities.data.map(
            function (item) {
                return <KindPanelItem key={item.id} activity={item}/>
            }
        );

        return (
            <div className="mdl-layout__content zx-activities">
                { Items }
            </div>
        )
    }
}