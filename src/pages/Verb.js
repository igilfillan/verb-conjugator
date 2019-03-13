import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import IndicativoTable from '../components/IndicativoTable';
import SubjuntivoTable from '../components/SubjuntivoTable';
import ImperativoTable from '../components/ImperativoTable';
import VerbTable from '../components/VerbTable';
import VerbTableHead from '../components/VerbTableHead';

import verbData from '../verb-list-spanish.json';
import { getMood } from '../utils/utils';
import { moodLabels } from '../constants';


import Typography from '@material-ui/core/Typography';



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

            <Typography align='center' variant='headline'>
            {match.params.infinitive}
          </Typography>

          <Typography variant="body1">{this.state.verbEntries[0].infinitive_english}</Typography>

          <VerbTable>
            <Typography align='center' variant='subheading'>{moodLabels.indicativo}</Typography>
            <IndicativoTable data={getMood(this.state.verbEntries, 'Indicativo')} />
          </VerbTable>

          <VerbTable>
            <VerbTableHead>{moodLabels.subjuntivo}</VerbTableHead>
            <SubjuntivoTable data={getMood(this.state.verbEntries, 'Subjuntivo')} />
          </VerbTable>

          <VerbTable>
           <Typography align='center' variant='subheading'>{moodLabels.imperativo}</Typography>
          <ImperativoTable afirmativo={getMood(this.state.verbEntries, 'Imperativo Afirmativo')} negativo={getMood(this.state.verbEntries, 'Imperativo Negativo')} />
          </VerbTable>
        </>
    )
  }

};

export default Verb;