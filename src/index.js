import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import utility from '@ciro-maciel/utility';

import './assets/css/style.css';
import 'antd/dist/antd.min.css';

import Home from './containers/Home';

// https://reacttraining.com/react-router/web/guides/server-rendering/404-401-or-any-other-status
const HttpStatus = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const NotFound = () => (
  <HttpStatus code={404}>
    <div>
      <h3>Desculpe, não consigo encontrar a página solicitada.</h3>
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
