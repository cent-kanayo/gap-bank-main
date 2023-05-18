import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const AuthProtected = (props) => {
  const { isAuthorized } = useSelector((state) => state.auth);

  /*
    redirect is un-auth access protected routes via url
  */

  if (!isAuthorized) {
    return (
      <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {' '}
            <Component {...props} />{' '}
          </>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
