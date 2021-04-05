import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import CountriesIndex from "./app/countries/countries-index";
import CountriesContainer from "./app/countries/countries-container";
import LoginPage from "./app/login/login-page";
import Notfound from "./common/template/notFound";
import { isAuthenticated } from "./auth";

const hist = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter history={hist}>
    <Switch>
      <PrivateRoute exact path="/" component={CountriesIndex} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/logout" component={LoginPage} />
      <PrivateRoute exact path="/countries" component={CountriesIndex} />
      <PrivateRoute exact path="/countries/:id" component={CountriesContainer} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
