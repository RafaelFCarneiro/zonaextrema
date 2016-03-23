import React from 'react';

export default class Add extends React.Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.kinds.sync());
    }

    render() {

        const Items = this.props.kinds.data.map(
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