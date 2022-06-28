import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../features/splashscreen';
import Login from '../features/login/index';
import Register from '../features/register';
import HomePage from '../features/homepage';
import Discount from '../features/Discount';
import RecentScheduleDetail from '../features/recent-schedule-detail';
import PlacePoplular from '../features/popular-places-detail';
import SpecialExprience from '../features/special-experience';
import Place12 from '../features/place12';
import HotelResortDetail from '../features/hotel-resort-detail';

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
      <Stack.Screen name="Discount" component={Discount} />
      <Stack.Screen
        name="RecentScheduleDetail"
        component={RecentScheduleDetail}
      />
      <Stack.Screen name="PlacePoplular" component={PlacePoplular} />
      <Stack.Screen name="SpecialExprience" component={SpecialExprience} />
      <Stack.Screen name="Place12" component={Place12} />
      <Stack.Screen name="HotelResortDetail" component={HotelResortDetail} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
