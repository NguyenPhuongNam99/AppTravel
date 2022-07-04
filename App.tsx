import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import Register from './src/features/register';
import Login from './src/features/login';
import {UseLogin} from './src/hook/useLogin';
const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = React.useState(true);
  return (
    <NavigationContainer>
      <UseLogin>
        <StackNavigation />
      </UseLogin>
    </NavigationContainer>
  );
};

export default App;
