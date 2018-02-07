import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './header/header';
import SessionFormContainer from './session_form/session_form_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UploadFormContainer from './upload/upload_container';
import PhotoContainer from './photos/photo_show_container';
import PhotoFeedContainer from './photos/photo_feed_container';
import PhotoManageContainer from './photos/photo_manage_container';
import Splash from './static_pages/splash';

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute exact path='/manage' component={PhotoManageContainer} />
      <ProtectedRoute exact path='/feed' component={PhotoFeedContainer} />
      <Route exact path='/:username' component={UserProfileContainer} />
      <Route exact path='/photos/:photoId' component={PhotoContainer} />
    </Switch>
    <UploadFormContainer />
  </div>
);

export default App;
