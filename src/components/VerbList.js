import React from 'react';
import { Link } from 'react-router-dom';

const VerbList = ( {data} ) => {

  let uniqueVerbs = [];
  let verbListItems = data.map( (verb) => {

    let isUnique = !uniqueVerbs.includes(verb.infinitive);

    if (!uniqueVerbs.includes(verb.infinitive)) {
      uniqueVerbs.push(verb.infinitive);
    }

    return isUnique ? <li key={verb.infinitive}><Link to={`/verb/${verb.infinitive}`}>{verb.infinitive}</Link></li> : null;

  });

  return (
      <ol>
        {verbListItems}
      </ol>

  );
};

export default VerbList;