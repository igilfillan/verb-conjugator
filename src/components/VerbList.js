import React from 'react';

const VerbList = ( {data} ) => {

  let uniqueVerbs = [];
  let verbListItems = data.map( (verb) => {

    let isUnique = !uniqueVerbs.includes(verb.infinitive);

    if (!uniqueVerbs.includes(verb.infinitive)) {
      uniqueVerbs.push(verb.infinitive);
    }

    return isUnique ? <li key={verb.infinitive}>{verb.infinitive}</li> : null;

  });

  return (
      <ol>
        {verbListItems}
      </ol>

  );
};

export default VerbList;