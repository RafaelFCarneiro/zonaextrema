import React from 'react';

class TagsCard extends React.Component {

    render() {

        var lista = [];
        var tags = this.props.description;

        if( tags ) {
            lista = this.props.description.split(" ").map( (tag) => <a>{tag}</a> );
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

        return (
            <div className="row WEIGHT-ROW">

                <div className="kind-info" data-id="{this.props.item.id}">
                    <div className="kind">
                        <a> WEIGHT </a>

                        <a className="private"> secret </a>
                    </div>
                    <div className="date">{this.props.item.logged_at}</div>
                </div>

                <TagsCard description={this.props.item.description} />

            </div>
        )
    }

}

export default class Activities extends React.Component {

    render() {

        var logs = [
            {
                id: 2,
                user_id: 2,
                kind: 1,
                description: null,
                logged_at: "2015-11-08T16:21:32.000-03:00",
                created_at: "2015-11-08T16:21:33.372-03:00",
                updated_at: "2015-11-08T16:21:33.372-03:00",
                deleted_at: null
            },
            {
                id: 17,
                user_id: 2,
                kind: 3,
                description: "#water #150ml",
                logged_at: "2015-11-08T23:41:53.000-03:00",
                created_at: "2015-11-08T23:41:54.407-03:00",
                updated_at: "2015-11-08T23:41:54.407-03:00",
                deleted_at: null
            },
            {
                id: 18,
                user_id: 2,
                kind: 1,
                description: "#85kg",
                logged_at: "2015-11-09T00:00:50.000-03:00",
                created_at: "2015-11-09T00:00:51.387-03:00",
                updated_at: "2015-11-09T00:00:51.387-03:00",
                deleted_at: null
            },
            {
                id: 19,
                user_id: 2,
                kind: 3,
                description: "#water 500ml",
                logged_at: "2015-11-09T00:01:18.000-03:00",
                created_at: "2015-11-09T00:01:18.500-03:00",
                updated_at: "2015-11-09T00:01:18.500-03:00",
                deleted_at: null
            },
            {
                id: 74,
                user_id: 2,
                kind: 4,
                description: "#jiujitsu",
                logged_at: "2015-12-18T12:20:12.000-03:00",
                created_at: "2015-12-18T14:20:14.217-03:00",
                updated_at: "2015-12-18T14:20:14.217-03:00",
                deleted_at: null
            },
            {
                id: 77,
                user_id: 2,
                kind: 7,
                description: null,
                logged_at: "2016-01-15T07:18:23.000-03:00",
                created_at: "2016-01-15T14:18:23.701-03:00",
                updated_at: "2016-01-15T14:18:23.701-03:00",
                deleted_at: null
            },
            {
                id: 78,
                user_id: 2,
                kind: 3,
                description: "#water 300ml",
                logged_at: "2016-01-15T07:38:35.000-03:00",
                created_at: "2016-01-15T14:18:35.814-03:00",
                updated_at: "2016-01-15T14:18:35.814-03:00",
                deleted_at: null
            },
            {
                id: 76,
                user_id: 2,
                kind: 4,
                description: "#jiujitsu #hiit #privateclass",
                logged_at: "2016-01-15T10:17:52.000-03:00",
                created_at: "2016-01-15T14:17:53.037-03:00",
                updated_at: "2016-01-15T14:17:53.037-03:00",
                deleted_at: null
            },
            {
                id: 75,
                user_id: 2,
                kind: 2,
                description: "#pork #lowcarb #lchf #400g",
                logged_at: "2016-01-15T12:17:02.000-03:00",
                created_at: "2016-01-15T14:17:03.637-03:00",
                updated_at: "2016-01-15T14:17:03.637-03:00",
                deleted_at: null
            },
            {
                id: 79,
                user_id: 2,
                kind: 1,
                description: null,
                logged_at: "2016-01-18T08:46:54.000-03:00",
                created_at: "2016-01-18T08:46:55.150-03:00",
                updated_at: "2016-01-18T08:46:55.150-03:00",
                deleted_at: null
            },
            {
                id: 80,
                user_id: 2,
                kind: 1,
                description: "#85kg",
                logged_at: "2016-02-06T16:49:17.000-03:00",
                created_at: "2016-02-06T16:49:18.421-03:00",
                updated_at: "2016-02-06T17:02:10.928-03:00",
                deleted_at: null
            },
            {
                id: 81,
                user_id: 2,
                kind: 3,
                description: "#water #coffee",
                logged_at: "2016-02-06T16:49:32.000-03:00",
                created_at: "2016-02-06T16:49:32.894-03:00",
                updated_at: "2016-02-06T16:49:32.894-03:00",
                deleted_at: null
            },
            {
                id: 82,
                user_id: 2,
                kind: 2,
                description: "#pao #carbs",
                logged_at: "2016-02-08T08:37:37.000-03:00",
                created_at: "2016-02-08T08:37:37.851-03:00",
                updated_at: "2016-02-08T08:37:37.851-03:00",
                deleted_at: null
            },
            {
                id: 83,
                user_id: 2,
                kind: 3,
                description: "#water 300ml",
                logged_at: "2016-02-08T08:37:53.000-03:00",
                created_at: "2016-02-08T08:37:54.418-03:00",
                updated_at: "2016-02-08T08:37:54.418-03:00",
                deleted_at: null
            },
            {
                id: 84,
                user_id: 2,
                kind: 6,
                description: null,
                logged_at: "2016-02-08T08:38:12.000-03:00",
                created_at: "2016-02-08T08:38:12.489-03:00",
                updated_at: "2016-02-08T08:38:12.489-03:00",
                deleted_at: null
            },
            {
                id: 85,
                user_id: 2,
                kind: 5,
                description: null,
                logged_at: "2016-02-08T08:46:58.000-03:00",
                created_at: "2016-02-08T08:46:59.218-03:00",
                updated_at: "2016-02-08T08:46:59.218-03:00",
                deleted_at: null
            },
            {
                id: 87,
                user_id: 2,
                kind: 1,
                description: null,
                logged_at: "2016-02-10T20:58:56.000-03:00",
                created_at: "2016-02-10T20:58:56.705-03:00",
                updated_at: "2016-02-10T20:58:56.705-03:00",
                deleted_at: null
            },
            {
                id: 90,
                user_id: 2,
                kind: 1,
                description: null,
                logged_at: "2016-02-25T20:05:58.000-03:00",
                created_at: "2016-02-25T20:05:59.000-03:00",
                updated_at: "2016-02-25T20:05:59.000-03:00",
                deleted_at: null
            },
            {
                id: 92,
                user_id: 2,
                kind: 5,
                description: null,
                logged_at: "2016-02-25T20:22:13.000-03:00",
                created_at: "2016-02-25T20:22:13.737-03:00",
                updated_at: "2016-02-25T20:22:13.737-03:00",
                deleted_at: null
            },
            {
                id: 93,
                user_id: 2,
                kind: 10,
                description: null,
                logged_at: "2016-02-25T20:22:27.000-03:00",
                created_at: "2016-02-25T20:22:27.477-03:00",
                updated_at: "2016-02-25T20:22:27.477-03:00",
                deleted_at: null
            },
            {
                id: 95,
                user_id: 2,
                kind: 8,
                description: null,
                logged_at: "2016-02-25T20:22:41.000-03:00",
                created_at: "2016-02-25T20:22:41.853-03:00",
                updated_at: "2016-02-25T20:22:41.853-03:00",
                deleted_at: null
            },
            {
                id: 96,
                user_id: 2,
                kind: 9,
                description: null,
                logged_at: "2016-02-25T20:22:46.000-03:00",
                created_at: "2016-02-25T20:22:46.436-03:00",
                updated_at: "2016-02-25T20:22:46.436-03:00",
                deleted_at: null
            },
            {
                id: 97,
                user_id: 2,
                kind: 12,
                description: "#baladatop #soosplay #topmoral",
                logged_at: "2016-02-25T20:22:50.000-03:00",
                created_at: "2016-02-25T20:22:50.497-03:00",
                updated_at: "2016-02-25T20:22:50.497-03:00",
                deleted_at: null
            },
            {
                id: 99,
                user_id: 2,
                kind: 1,
                description: null,
                logged_at: "2016-02-27T11:20:33.000-03:00",
                created_at: "2016-02-27T11:20:37.392-03:00",
                updated_at: "2016-02-27T11:20:37.392-03:00",
                deleted_at: null
            },
            {
                id: 101,
                user_id: 2,
                kind: 2,
                description: null,
                logged_at: "2016-03-04T13:18:34.000-03:00",
                created_at: "2016-03-04T13:18:39.852-03:00",
                updated_at: "2016-03-04T13:18:39.852-03:00",
                deleted_at: null
            },
            {
                id: 103,
                user_id: 2,
                kind: 20,
                description: "#english #conversation",
                logged_at: "2016-03-05T10:10:40.000-03:00",
                created_at: "2016-03-05T10:10:41.448-03:00",
                updated_at: "2016-03-05T10:10:41.448-03:00",
                deleted_at: null
            },
            {
                id: 104,
                user_id: 2,
                kind: 13,
                description: "“The Most Creative Mobile Navigation Patterns” @101babich https://medium.com/ux-planet/the-most-creative-mobile-navigation-patterns-3dc6f506504 #medium #blog",
                logged_at: "2016-03-05T10:11:25.000-03:00",
                created_at: "2016-03-05T10:11:26.219-03:00",
                updated_at: "2016-03-05T10:11:26.219-03:00",
                deleted_at: null
            },
            {
                id: 105,
                user_id: 2,
                kind: 19,
                description: "#gvcast",
                logged_at: "2016-03-05T10:11:46.000-03:00",
                created_at: "2016-03-05T10:11:46.706-03:00",
                updated_at: "2016-03-05T10:11:46.706-03:00",
                deleted_at: null
            }
        ];

        var lista = logs.map( (item) => <KindPanelItem item={item} /> );

        return (
            <div className="activities">
                {lista}
            </div>
        );
    };
};