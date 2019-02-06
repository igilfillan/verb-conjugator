import React from 'react';
import Navigation from '../components/Navigation';

const Verb = (props) => {

  console.log('props', props.match.params.infinitive);

  const { match } = props;

  return (
      <>
      <Navigation />
          <header className="App-header">
            {match.params.infinitive}
          </header>
        </>
  )
};

export default Verb;
