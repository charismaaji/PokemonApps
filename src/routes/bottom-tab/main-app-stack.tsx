/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

// Bottom Tab
import {MainAppParamList} from './bottom-tab.type';
import BottomNavigator from './bottom-navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {CompareScreen, HomeScreen} from '../../screens';

const Tab = createBottomTabNavigator<MainAppParamList>();

const MainAppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen component={HomeScreen} name="HomeScreen" />
      <Tab.Screen component={CompareScreen} name="CompareScreen" />
    </Tab.Navigator>
  );
};
export default MainAppStack;
