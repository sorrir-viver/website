import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import utility from '@ciro-maciel/utility';

import './assets/css/style.css';
import 'antd/dist/antd.min.css';

import Home from './containers/Home';

const NotFound = () => (
  <HttpStatus code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </HttpStatus>
);

// https://reacttraining.com/react-router/web/example/basic
const Routes = () => (
  // replicação para a validação do estado atual para token + user
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
render(<Routes />, document.getElementById('container'));
