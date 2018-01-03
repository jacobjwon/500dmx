import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
        <h1>500dmx</h1>
      <GreetingContainer />
    </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

// this link wraps the header above
// <Link to="/" className="header-link">
// </Link>

// this switch wraps the auth routes below the header above
// <Switch>
// these 3 belong within switch above
// <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
// <Route path="/benches/:benchId" component={BenchShowContainer} />
// <Route exact path="/" component={SearchContainer} />
// </Switch>

export default App;
