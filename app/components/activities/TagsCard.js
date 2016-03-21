import React from 'react'

export default class TagsCard extends React.Component {

    render() {

        var lista = [];
        var tags = this.props.description;

        if (tags) {
            lista = this.props.description.split(" ").map(function (tag, index) {
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