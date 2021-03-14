import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Loader, Screen } from '../../components';
import { useLabels } from '../../hooks/useLabels';
import { AppState } from '../../store/initialState';
import AppTitle from './AppTitle';
import Description from './Description';
import GetStartedButton from './GetStartedButton';

const LandingScreen = () => {
  const {
    ui: { isLoading },
  } = useSelector((state: AppState) => state);
  const { landing } = useLabels();

  if (isLoading) {
    return <Loader loadingText={landing.loadingStories} />;
  }

  return (
    <Screen style={styles.container}>
      <AppTitle />
      <Description />
      <GetStartedButton />
    </Screen>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default LandingScreen;
