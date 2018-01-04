import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Splash from './static_pages/splash';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Link to="/" className="header-link">
      <header>
        <h1>500dmx</h1>
        <GreetingContainer />
      </header>
    </Link>
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
