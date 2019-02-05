import React, { Component } from 'react';
import verbData from './verb-list-spanish.json';
import VerbList from './components/VerbList';

import './App.css';



class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Verbo conjugador

          <VerbList data={verbData} />
        </header>
      </div>
    );
  }
}

export default App;
