import React from 'react'
import TagsCard from './TagsCard'

export default class Activity extends React.Component {

    render() {

        let tagCardsId = "TagId" + this.props.activity.id;

        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp row WEIGHT-ROW">

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