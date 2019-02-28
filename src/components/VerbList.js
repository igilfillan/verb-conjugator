import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const VerbList = ( {data} ) => {

  let uniqueVerbs = [];
  let verbListItems = data.map( (verb) => {

    let isUnique = !uniqueVerbs.includes(verb.infinitive);

    if (!uniqueVerbs.includes(verb.infinitive)) {
      uniqueVerbs.push(verb.infinitive);
    }

    return isUnique
    ? <Link to={`/verb/${verb.infinitive}`}>
          <ListItem button divider>
          <ListItemText primary={verb.infinitive}/>
        </ListItem>
        </Link>
    : <React.Fragment />

  });

  return (
      <List component="nav">
        {verbListItems}
      </List>

  );
};

export default VerbList;
