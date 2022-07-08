import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import Register from './src/features/register';
import Login from './src/features/login';
import {UseLogin} from './src/hook/useLogin';

import {store} from './src/app/store';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = React.useState(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UseLogin>
          <StackNavigation />
        </UseLogin>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
