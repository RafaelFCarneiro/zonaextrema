import React from 'react'

import { Provider, connect } from 'react-redux'
import { createStore, bindActionCreators, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reduxApi, {transformers} from "redux-api"
import "isomorphic-fetch";

class TagsCard extends React.Component {

    render() {

        var lista = [];
        var tags = this.props.description;

        if (tags) {
            lista = this.props.description.split(" ").map(function(tag, index) {
                var tagId = "tag" + index;
                return <a key={tagId}>{tag}</a>
            })
        }

        return (
            <div className="tags">
                {lista}
            </div>
        )

    }

}

class KindPanelItem extends React.Component {

    render() {

        console.log("KindPanelItem", this.props.activity);

        let tagCardsId = "TagId" + this.props.activity.id;

        return (
            <div className="row WEIGHT-ROW">

                <div className="kind-info" data-id="{this.props.item.id}">
                    <div className="kind">
                        <a> WEIGHT </a>

                        <a className="private"> secret </a>
                    </div>
                    <div className="date">{this.props.activity.updatedAt}</div>
                </div>

                <TagsCard key={tagCardsId} description={this.props.activity.description}/>


            </div>
        )
    }

}

const rest = reduxApi({
    activities: {
        url: `/activities`
        , crud: true
        , transformer: transformers.array
    }
}).use("fetch", (url, options) => fetch(url, options).then((resp)=> resp.json()) );


class ActivitiesList extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(rest.actions.activities.sync());
    }

    render() {

        const Items = this.props.activities.data.map(
            function (item) {
                return <KindPanelItem key={item.id} activity={item}/>
            }
        );

        return (
            <div className="activities">
                { Items }
            </div>
        )
    }
}


export default class Activities extends React.Component {


    render() {

        const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore);
        const reducer = combineReducers(rest.reducers);
        const store = createStoreWithMiddleware(reducer);

        store.subscribe(()=> {
            console.log("ESTADO no LOGGER", store.getState())
        });

        function mapProps(state) {
            return {
                activities: state.activities
            }
        }

        const SmartActivitiesList = connect(mapProps)(ActivitiesList);

        return (
            <Provider store={store}>
                <SmartActivitiesList />
            </Provider>
        )

    }
}