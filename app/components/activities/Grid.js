import React, {Component} from 'react'
import { connect } from 'react-redux';

@connect((state) => ({ rest: state.rest, kinds: state.kinds }))
export default class Grid extends Component {

    componentDidMount() {
        const {dispatch, rest} = this.props;
        dispatch(rest.actions.kinds.sync());
    }

    render() {

        const Items = this.props.kinds.data.map(
            function (item) {
                return <div className="zx-kind" style={{backgroundColor: item.color}} key={item.id}>{item.description}</div>
            }
        );

        return (
            <div className="mdl-layout__content zx-grid">
                { Items }
            </div>
        )

    }

}