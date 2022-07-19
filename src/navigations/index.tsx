import React from 'react';
import {StackLoginScreen} from './StackNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import {userAppUser} from '../hook/useLogin';

const RouteNavigation = () => {
  const {getIsLogin} = userAppUser();
  const isLogin = getIsLogin();
  return <>{isLogin ? <BottomTabNavigation /> : <StackLoginScreen />}</>;
};

export default RouteNavigation;
