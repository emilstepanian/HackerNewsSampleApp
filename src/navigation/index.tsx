import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../components';
import { useLabels } from '../hooks/useLabels';
import { useStories } from '../hooks/useStories';
import { AppState } from '../store/initialState';
import AppStackScreen from './AppStack';

const AppNavigator = () => {
  const {
    ui: { isAppInitializing },
  } = useSelector((state: AppState) => state);

  useStories();
  const { landing } = useLabels();
  return (
    <NavigationContainer>
      {isAppInitializing ? (
        <Loader loadingText={landing.loadingStories} />
      ) : (
        <AppStackScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
