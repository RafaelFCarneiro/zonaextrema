import React, {Component} from 'react';
import { connect } from 'react-redux'
import Grid from './Grid'

export default class Add extends Component {

    render() {

        function mapProps(state) {
            return {
                kinds: state.kinds
            }
        }

        const SmartGrid = connect(mapProps)(Grid);

        return (
            <SmartGrid rest={this.props.rest}/>
        )

    }

}