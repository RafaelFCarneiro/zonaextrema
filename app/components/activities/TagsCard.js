import React from 'react';

export default function TagsCard( {description=''} ) {

  const createTag = (tag, index) => tag.length? <a key={ `tag${index}` }>{tag.trim()}</a> : '';
  const list = description.split(' ')
                          .map( createTag );

  return (
      <div className="mdl-cell--hide-phone tags">
          {list}
      </div>
  );

}

TagsCard.propTypes = { description: React.PropTypes.string };
