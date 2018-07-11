import React, { Component } from "react";
import { Switch, Route, browserHistory } from "react-router-dom";

import { Home, Profile, AllDates, Auth, DataCollect } from './index'

class Routes extends Component {
  render() {
    return (
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/alldates" component={AllDates} />
        <Route exact path="/auth/:option" component={Auth}/>
        <Route exact path="/you" component={DataCollect}/>
      </Switch>
    );
  }
}

export default Routes;
