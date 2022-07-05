import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../features/homepage';
import Profile from '../features/profile';
import AppIonicons from '../components/icon/AppIonicons';
import AppMaterIcon from '../components/icon/AppMaterialIcons';
import Notification from '../features/notification';
import AppFoundation from '../components/icon/AppFoundation';
import Discount from '../features/Discount';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
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
        name="Discount"
        component={Discount}
        options={{
          tabBarIcon: tabInfo => (
            <AppFoundation
              name="shopping-bag"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: tabInfo => (
            <AppMaterIcon
              name="notifications"
              size={27}
              color={tabInfo.focused ? '#FF5F24' : '#9A9A9A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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
  );
}

export default BottomTabNavigation;
