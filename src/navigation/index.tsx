import { NavigationContainer } from '@react-navigation/native';
import AppStackScreen from './AppStack';
import React from 'react';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
