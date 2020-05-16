import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

/**Authenticates if the User is logged in or not */

// Takes in the component, authenticated bool value and the rest of the properties
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? <Redirect to="/profile" /> : <Component {...props} />
    }
  />
);

AuthRoute.propTypes = {
  user: PropTypes.object
};

// TO-DO REFACTOR TO WORK WITH CONTEXT API
// const mapStateToProps = state => ({
//   authenticated: state.user.authenticated
// });

export default AuthRoute;
