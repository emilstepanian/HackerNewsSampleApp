import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Landing from '../screens/Landing';
import NewsList from '../screens/NewsList';
import { defaultNavigationOptions, transitionOptions } from './setup';
import { RootStackParamList, Routes } from './types';

const AppStack = createStackNavigator<RootStackParamList>();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator screenOptions={defaultNavigationOptions}>
      <AppStack.Screen
        options={transitionOptions}
        name={Routes.LANDING}
        component={Landing}
      />
      <AppStack.Screen
        options={transitionOptions}
        name={Routes.NEWS_LIST}
        component={NewsList}
      />
    </AppStack.Navigator>
  );
};
export default AppStackScreen;
