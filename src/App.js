import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Verbs from './pages/Verbs';
import Verb from './pages/Verb';

import './App.css';

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/verb/:infinitive" component={Verb} />
            <Route exact path="/verb" component={Verbs} />
          </Switch>
        </Router>
    );
  }
}

export default App;
