import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';

import { UseLogin } from './src/hook/useLogin';

import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import RouteNavigation from './src/navigations/index';
import { StripeProvider } from '@stripe/stripe-react-native';

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
    <StripeProvider
      publishableKey={'pk_test_51LKCh8HBvb3MzaZzQ4r8pyrGRybpjCGLES5RPWbnoifGK9solGIu6cSWWOlCKZIXtdZQedYF5DXxP4KK3cJJ1UwA00flLZaHHy'}
      merchantIdentifier="merchant.identifier">
      <Provider store={store}>
        <NavigationContainer>
          <UseLogin>
            <RouteNavigation />
          </UseLogin>
        </NavigationContainer>
      </Provider>
    </StripeProvider>
  );
};

export default App;
