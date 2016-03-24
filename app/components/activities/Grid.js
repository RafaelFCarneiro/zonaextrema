import React, {Component} from 'react'

export default class Grid extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.kinds.sync());
    }

    render() {

        const Items = this.props.kinds.data.map(
            function (item) {
                //return <KindPanelItem key={item.id} activity={item}/>
                return <p>{item.description}</p>
            }
        );

        return (
            <div className="mdl-layout__content zx-kinds">
                { Items }
            </div>
        )

    }

}