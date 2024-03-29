import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../features/homepage';
import Profile from '../features/profile';
import AppIonicons from '../components/icon/AppIonicons';
import AppMaterIcon from '../components/icon/AppMaterialIcons';
import Notification from '../features/notification';
import AppFoundation from '../components/icon/AppFoundation';
import Discount from '../features/Discount';
import Favourite from '../features/profile/favourite';
import {
  StackHomeScreen,
  StackFavouriteScreen,
  StackProfileScreen,
  StackNotificationScreen,
  StackTourOrder,
} from './StackNavigation';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <SafeAreaView style={{flex :1}}>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="StackHomeScreen"
        component={StackHomeScreen}
        options={{
          tabBarIcon: tabInfo => (
            <AppIonicons
              name="ios-home"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StackNotificationScreen"
        component={StackNotificationScreen}
        options={{
          tabBarIcon: tabInfo => (
            <AppMaterIcon
              name="rate-review"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
       <Tab.Screen
        name="StackTourOrder"
        component={StackTourOrder}
        options={{
          tabBarIcon: tabInfo => (
            <AppMaterIcon
              name="tour"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StackFavouriteScreen"
        component={StackFavouriteScreen}
        options={{
          tabBarIcon: tabInfo => (
            <AppFoundation
              name="foot"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="StackProfileScreen"
        component={StackProfileScreen}
        options={{
          tabBarIcon: tabInfo => (
            <AppMaterIcon
              name="account-circle"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
    </Tab.Navigator>
    </SafeAreaView>
  );
}

export default BottomTabNavigation;
