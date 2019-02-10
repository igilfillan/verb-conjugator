import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import ConjugationTable from '../components/ConjugationTable';
import verbData from '../verb-list-spanish.json';


class Verb extends Component {

  constructor(props){
    super(props);

    const currentVerb = this.props.match.params.infinitive;

    let verbEntries = verbData.filter( entry => {
      return entry.infinitive === currentVerb;
    });

    this.state = { verbEntries: verbEntries };
  }

  getMood(mood){
    return this.state.verbEntries.filter( (item) => {
        return item.mood === mood;
    });
  }

  render(){

    const { match } = this.props;

    console.log('indicative', this.getMood('Indicativo'));


      return (
        <>
          <Navigation />

          <header className="App-header">
            {match.params.infinitive}
          </header>

          <p>{this.state.verbEntries[0].infinitive_english}</p>

            <h2>Indicativo</h2>
          <ConjugationTable data={this.getMood('Indicativo')} />

            <h2>Subjuntivo</h2>
          {/*<ConjugationTable data={this.getMood('Subjuntivo')} />*/}

        </>
    )

  }

};

export default Verb;

