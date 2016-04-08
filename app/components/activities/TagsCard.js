import React from 'react'

export default function TagsCard({ description }) {

  const list = description.split(" ")
                          .map( (tag, index) => 
                                  tag.length? <a key={ `tag${index}` }>{tag.trim()}</a> : "" )

  return (
      <div className="mdl-cell--hide-phone tags">
          {list}
      </div>
  )
}