import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Home from '../components/Home';
import Executives from '../components/Executives';
import Events from '../components/Events';

const Routes = () => {
  return <Router>
    <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/events"><Events/></Route>
      <Route path="/executive-team"><Executives/></Route>
    </Switch>
  </Router>;
};

export default Routes;