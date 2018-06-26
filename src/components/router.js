import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Profile, AllDates } from './index'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/alldates" component={AllDates} />
      </Switch>
    );
  }
}

export default Routes;
