import React from 'react'

import { Provider, connect } from 'react-redux'
import { createStore, bindActionCreators, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ActivitiesList from './activities/List'

const rest = reduxApi({
    activities: {
        url: `/activities`
        , crud: true
        , transformer: transformers.array
    }
}).use("fetch", (url, options) => fetch(url, options).then((resp)=> resp.json()));


export default class Activities extends React.Component {

    render() {

        const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore);
        const reducer = combineReducers({
            ...rest.reducers,
            routing: routerReducer
        });
        const store = createStoreWithMiddleware(reducer);

        syncHistoryWithStore(this.props.history, store)

        function mapProps(state) {
            return {
                activities: state.activities
            }
        }

        const SmartActivitiesList = connect(mapProps)(ActivitiesList);

        return (
            <Provider store={store}>
                <SmartActivitiesList rest={rest} />
            </Provider>
        )

    }
}