import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import Register from './src/features/register';
import Login from './src/features/login';
const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = React.useState(true);
  return (
    <NavigationContainer>
      {!state ? (
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="StackNavigation" component={StackNavigation} />
        </Tab.Navigator>
      ) : (
        <StackNavigation />
      )}
    </NavigationContainer>
  );
};

export default App;
