import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteParamList} from './routes.type';
import {DetailScreen, SplashScreen} from '../screens';
import MainAppStack from './bottom-tab/main-app-stack';

const Stack = createNativeStackNavigator<RouteParamList>();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={SplashScreen} name="SplashScreen" />
      <Stack.Screen component={MainAppStack} name="MainAppStack" />
      <Stack.Screen component={DetailScreen} name="DetailScreen" />
    </Stack.Navigator>
  );
};

export default Routes;
