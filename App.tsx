import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import Register from './src/features/register';
const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = React.useState(true);
  return (
    <NavigationContainer>
      {!state ? (
        <Tab.Navigator>
          <Tab.Screen name="Login" component={StackNavigation} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      ) : (
        <StackNavigation />
      )}
    </NavigationContainer>
  );
};

export default App;
