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
import HotelIcon from '../features/menu-icon/hotel-icon';
import RestaurantIcon from '../features/menu-icon/restaurant-icon';
import ComboIcon from '../features/menu-icon/combo-icon';
import Profile from '../features/profile';
import Setting from '../features/profile/setting';
import PrivacyPolicy from '../features/profile/setting/privacyPolicy';
import TermUse from '../features/profile/setting/term-use';
import PayGuide from '../features/profile/setting/pay';
import Favourite from '../features/profile/favourite';
import InformationProfile from '../features/profile/profile-information';
import UpdateInformationProfile from '../features/profile/profile-information/profile-information-update';
import Notification from '../features/notification';
import DetailPlace from '../features/detail-place';

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
      <Stack.Screen name="HotelIcon" component={HotelIcon} />
      <Stack.Screen name="RestaurantIcon" component={RestaurantIcon} />
      <Stack.Screen name="ComboIcon" component={ComboIcon} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermUse" component={TermUse} />
      <Stack.Screen name="PayGuide" component={PayGuide} />
      <Stack.Screen name="Favourite" component={Favourite} />
      <Stack.Screen name="InformationProfile" component={InformationProfile} />
      <Stack.Screen
        name="UpdateInformationProfile"
        component={UpdateInformationProfile}
      />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="DetailPlace" component={DetailPlace} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
