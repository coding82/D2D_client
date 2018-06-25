import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Profile } from './index'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default Routes;
