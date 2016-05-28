import React from 'react';
import TagEdit from './tagedit.js'

export default function TagsCard( {description='',editHandler} ) {

  const createTag = (tag, index) =>
  <TagEdit key={`tag${index}`} description={tag} editHandler={editHandler} />;

  const list = description.split(' ')
                          .map( createTag );

  return (
      <div className="mdl-cell--hide-phone tags">
          {list}
      </div>
  );

}

TagsCard.propTypes = { description: React.PropTypes.string };
