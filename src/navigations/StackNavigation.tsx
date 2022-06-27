import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../features/splashscreen';
import Login from '../features/login/index';
import Register from '../features/register';
import HomePage from '../features/homepage';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
