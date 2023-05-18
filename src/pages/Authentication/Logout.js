import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';

import withRouter from '../../Components/Common/withRouter';
import { logoutUser } from '../../store/features/auth';

const Logout = (props) => {
  const dispatch = useDispatch();

  const { isUserLogout } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  if (isUserLogout) {
    return <Navigate to="/login" />;
  }

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);
