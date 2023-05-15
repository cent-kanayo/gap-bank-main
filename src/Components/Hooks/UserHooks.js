import { useEffect, useState } from 'react';
import { getLoggedinUser } from '../../helpers/api_helper';

const useProfile = () => {
  const getUserFromStorage = () => {
    const user = localStorage.getItem('user');
    const result = user ? JSON.parse(user) : {};
    return result;
  };
  const getTokenFromStorage = () => {
    const token = localStorage.getItem('gapToken');
    const result = token ? token : {};
    return result;
  };
  const user = getUserFromStorage();
  const token = getTokenFromStorage();
  // const userProfileSession = getLoggedinUser();
  // var token =
  // userProfileSession &&
  // userProfileSession["token"];
  // const [loading, setLoading] = useState(userProfileSession ? false : true);
  // const [userProfile, setUserProfile] = useState(
  //   userProfileSession ? userProfileSession : null
  // );

  // useEffect(() => {
  //   const userProfileSession = getLoggedinUser();
  //   var token =
  //     userProfileSession &&
  //     userProfileSession["token"];
  //   setUserProfile(userProfileSession ? userProfileSession : null);
  //   setLoading(token ? false : true);
  // }, []);

  return { user, token };
};

export { useProfile };
