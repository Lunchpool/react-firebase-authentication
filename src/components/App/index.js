import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';

import LandingPage from '../Landing';

import SignUpPage from '../../authentication/components/SignUp';
import SignInPage from '../../authentication/components/SignIn';
import PasswordForgetPage from '../../authentication/components/PasswordForget';
import AccountPage from '../../authentication/components/Account';
import AdminPage from '../../authentication/components/Admin';

import * as ROUTES from '../Navigation/constants/routes';
import { withAuthentication } from '../../authentication/components/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
