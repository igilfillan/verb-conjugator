import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import IndicativoTable from '../components/IndicativoTable';
import SubjuntivoTable from '../components/SubjuntivoTable';
import ImperativoTable from '../components/ImperativoTable';
import verbData from '../verb-list-spanish.json';
import { getMood } from '../utils/utils';
import { moodLabels } from '../constants';


import Paper from '@material-ui/core/Paper';



class Verb extends Component {

  constructor(props){
    super(props);
    const currentVerb = this.props.match.params.infinitive;
    let verbEntries = verbData.filter( entry => {
      return entry.infinitive === currentVerb;
    });

    this.state = { verbEntries: verbEntries };
  }


  render(){

    const { match } = this.props;

      return (
        <>
          <Navigation />

          <header className="App-header">
            {match.params.infinitive}
          </header>

          <p>{this.state.verbEntries[0].infinitive_english}</p>

          <Paper>
            <h2>{moodLabels.indicativo}</h2>
            <IndicativoTable data={getMood(this.state.verbEntries, 'Indicativo')} />
          </Paper>

          <Paper>
            <h2>{moodLabels.subjuntivo}</h2>
            <SubjuntivoTable data={getMood(this.state.verbEntries, 'Subjuntivo')} />
          </Paper>

          <Paper>
           <h2>{moodLabels.imperativo}</h2>
          <ImperativoTable afirmativo={getMood(this.state.verbEntries, 'Imperativo Afirmativo')} negativo={getMood(this.state.verbEntries, 'Imperativo Negativo')} />
          </Paper>
        </>
    )
  }

};

export default Verb;