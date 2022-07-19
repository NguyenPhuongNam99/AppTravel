import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';

import {UseLogin} from './src/hook/useLogin';

import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import RouteNavigation from './src/navigations/index';

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 14000);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <UseLogin>
          <RouteNavigation />
        </UseLogin>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
