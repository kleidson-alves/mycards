import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import EditCard from '../pages/EditCard';

export const Routes = () => (
  <Switch>
    <Route path="/"  exact component={Home}/>
    <Route path="/edit" component={EditCard}/>
  </Switch>
)

export default Routes;
