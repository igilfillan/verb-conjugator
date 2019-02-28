import React from 'react';
import Navigation from '../components/Navigation';
import verbData from '../verb-list-spanish.json';
import VerbList from '../components/VerbList';


const Verbs = () => {
  return (
      <>
        <Navigation />
        <header className="App-header">
          Verbos
        </header>

        <VerbList data={verbData} />
        </>
  )
};

export default Verbs;
