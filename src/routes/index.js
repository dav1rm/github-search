import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Repositories from '../pages/Repositories';

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/repositories" component={Repositories} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
