import React from 'react';
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
import BottomTabNavigation from './BottomTabNavigation';
import {userAppUser} from '../hook/useLogin';
import RecentScheduleDetailV2 from '../features/detail-ver2/recent-schedule-detail';
import ScheduleOverview from '../features/scheduleOverview';
import DetailPlan from '../features/scheduleOverview/plan-detail';
import TitleBlock from '../features/homepage/Title-block/TitleBlock';
import PopularPlaceDetailV2 from '../features/detail-ver2/popular-place-detail';
import Payment from '../features/payments';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderSuccess from '../components/orderSuccess/index';

const StackHome = createNativeStackNavigator();
const StackNotifi = createNativeStackNavigator();
const StackFavourite = createNativeStackNavigator();
const StackProfile = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

// const {getIsLogin} = userAppUser();
// const isLogin = getIsLogin();

export const StackLoginScreen = () => {
  return (
    <StackLogin.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="SplashScreen" component={SplashScreen} />
      <StackHome.Screen name="Login" component={Login} />
      <StackHome.Screen name="Register" component={Register} />
    </StackLogin.Navigator>
  );
};

export const StackHomeScreen = () => {
  return (
    <StackHome.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="HomePage" component={HomePage} />
      <StackHome.Screen name="TitleBlock" component={TitleBlock} />
      <StackHome.Screen name="Discount" component={Discount} />
      <StackHome.Screen
        name="RecentScheduleDetail"
        component={RecentScheduleDetail}
      />
      <StackHome.Screen name="PlacePoplular" component={PlacePoplular} />
      <StackHome.Screen name="SpecialExprience" component={SpecialExprience} />
      <StackHome.Screen name="Place12" component={Place12} />
      <StackHome.Screen
        name="HotelResortDetail"
        component={HotelResortDetail}
      />
      <StackHome.Screen name="HotelIcon" component={HotelIcon} />
      <StackHome.Screen name="RestaurantIcon" component={RestaurantIcon} />
      <StackHome.Screen name="ComboIcon" component={ComboIcon} />
      <StackHome.Screen name="Profile" component={Profile} />
      <StackHome.Screen name="Setting" component={Setting} />
      <StackHome.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <StackHome.Screen name="TermUse" component={TermUse} />
      <StackHome.Screen name="PayGuide" component={PayGuide} />

      <StackHome.Screen name="DetailPlace" component={DetailPlace} />
      <StackHome.Screen
        name="RecentScheduleDetailV2"
        component={RecentScheduleDetailV2}
      />
      <StackHome.Screen name="ScheduleOverview" component={ScheduleOverview} />
      <StackHome.Screen name="DetailPlan" component={DetailPlan} />
      <StackHome.Screen
        name="PopularPlaceDetailV2"
        component={PopularPlaceDetailV2}
      />
      <StackHome.Screen name="Payment" component={Payment} />
      <StackHome.Screen name="OrderSuccess" component={OrderSuccess} />
    </StackHome.Navigator>
  );
};

export const StackFavouriteScreen = () => {
  return (
    <StackFavourite.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="Favourite" component={Favourite} />
    </StackFavourite.Navigator>
  );
};

export const StackProfileScreen = () => {
  return (
    <StackProfile.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="Profile" component={Profile} />
      <StackHome.Screen name="Setting" component={Setting} />
      <StackHome.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <StackHome.Screen name="TermUse" component={TermUse} />
      <StackHome.Screen name="PayGuide" component={PayGuide} />
      <StackHome.Screen
        name="InformationProfile"
        component={InformationProfile}
      />
      <StackHome.Screen
        name="UpdateInformationProfile"
        component={UpdateInformationProfile}
      />
    </StackProfile.Navigator>
  );
};

export const StackNotificationScreen = () => {
  return (
    <StackNotifi.Navigator screenOptions={{headerShown: false}}>
      <StackHome.Screen name="Notification" component={Notification} />
    </StackNotifi.Navigator>
  );
};
