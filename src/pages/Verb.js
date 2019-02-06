import React, { Component } from 'react';
import Navigation from '../components/Navigation';
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


  getTense(mood, tense){

    let verbTense = this.state.verbEntries.find( (obj) => {
      return obj.mood === mood && obj.tense === tense;
    });

    console.log('verbTense', verbTense);
    return verbTense;

  }

  normaliseVerbItems = item => ({
    [item.tense.toLowerCase()]: {
        "form_1s": item.form_1s,
        "form_2s": item.form_2s,
        "form_3s": item.form_3s,
        "form_1p": item.form_1p,
        "form_2p": item.form_2p,
        "form_3p": item.form_3p
    }
  });

  getIndiciative = () => {

    const transVerb = this.state.verbEntries.map(this.normaliseVerbItems);

      // let flatVerbs = transVerb.reduce((obj, item) => {
      //   obj[item[0]] = item
      //   return obj
      // }, {})

    console.log('transVerb', transVerb);
    // console.log('flatVerbs', flatVerbs);

    // return {
    //   "mood": "Indicativo",
    //   "mood_english": "Indicative",
    //   "tense": {
    //     "presente": {
    //       "form_1s": "abandono",
    //       "form_2s": "abandonas",
    //       "form_3s": "abandona",
    //       "form_1p": "abandonamos",
    //       "form_2p": "abandonáis",
    //       "form_3p": "abandonan",
    //       "gerund": "abandonando"
    //     },
    //     "futuro": {
    //       "form_1s": "abandono",
    //       "form_2s": "abandonas",
    //       "form_3s": "abandona",
    //       "form_1p": "abandonamos",
    //       "form_2p": "abandonáis",
    //       "form_3p": "abandonan",
    //       "gerund": "abandonando"
    //     }
    //
    //   }
    // }

  }


  render(){

    const { match } = this.props;

    const indicativePresente = this.getTense('Indicativo', 'Presente');
    const indicativePreterito = this.getTense('Indicativo', 'Pretérito');
    const indicativeImperfecto = this.getTense('Indicativo', 'Imperfecto');

    this.getIndiciative();

    return (
        <>
          <Navigation />
          <header className="App-header">
            {match.params.infinitive}
          </header>

          <table>
            <thead>
            <tr>
            <th>
              <h2>Present Tense</h2></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{indicativePresente.form_1s} </td>
              <td>{indicativePreterito.form_1s} </td>
              <td>{indicativeImperfecto.form_1s} </td>
            </tr>
            <tr>
              <td>{indicativePresente.form_2s} </td>
              <td>{indicativePreterito.form_2s} </td>
              <td>{indicativeImperfecto.form_2s} </td>
            </tr>
            <tr>
              <td>{indicativePresente.form_3s} </td>
              <td>{indicativePreterito.form_3s} </td>
              <td>{indicativeImperfecto.form_3s} </td>
            </tr>
            <tr>
              <td>{indicativePresente.form_1p} </td>
              <td>{indicativePreterito.form_1p} </td>
              <td>{indicativeImperfecto.form_1p} </td>
            </tr>
            <tr>
              <td>{indicativePresente.form_2p} </td>
              <td>{indicativePreterito.form_2p} </td>
              <td>{indicativeImperfecto.form_2p} </td>
            </tr>
            <tr>
              <td>{indicativePresente.form_3p} </td>
              <td>{indicativePreterito.form_3p} </td>
              <td>{indicativeImperfecto.form_3p} </td>
            </tr>
            </tbody>
          </table>

        </>
    )

  }

};

export default Verb;
