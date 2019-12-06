import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import userService from '../lib/userService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      userService.isAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )

export default ProtectedRoute
