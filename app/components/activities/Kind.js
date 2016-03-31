import React, {Component} from 'react'

export default class Kind extends Component {

    render() {

        return (
            <div onClick={this.props.handler} className="zx-kind" style={{backgroundColor: this.props.kind.color}}>
                {this.props.kind.description}
            </div>
        )

    }

}