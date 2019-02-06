import React from 'react';
import Navigation from '../components/Navigation';
import verbData from '../verb-list-spanish.json';
import VerbList from '../components/VerbList';

const Home = () => {
  return (
      <>
        <Navigation />
        <header className="App-header">
          Todos los verbos

          <VerbList data={verbData} />

        </header>
        </>
  )
};

export default Home;
