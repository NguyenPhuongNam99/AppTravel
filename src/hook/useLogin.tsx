import React, {useState, useContext, createContext, useMemo} from 'react';
import loginAPI from '../features/login/loginApi';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';

interface TypeUserLogin {
  _onLogin: (userName: string, password: string) => Promise<void>;
  getIsLogin: () => boolean;
  getIsLoading: () => boolean;
}

const userContext = createContext<TypeUserLogin>({} as TypeUserLogin);

const UseLogin = props => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const onLogin = async (userName: string, password: string) => {
    setLoading(true);
    try {
      setIsLogin(false);
      const params = {
        username: userName,
        password: password,
      };
      const response = await loginAPI
        .login(params)
        .then(() => {
          setIsLogin(true);
          // navigation.navigate('HomePage' as never);
        })
        .catch(() => {});
      setLoading(false);
    } catch (error) {
      setIsLogin(false);
      setLoading(false);
    }
  };
  const valueUserContent = {
    _onLogin: onLogin,
    getIsLogin: () => {
      return isLogin;
    },
    getIsLoading: () => {
      return loading;
    },
  };
  return <userContext.Provider value={valueUserContent} {...props} />;
};

const userAppUser = () => {
  const context = useContext<TypeUserLogin>(userContext);
  return context;
};

export {UseLogin, userContext, userAppUser};
