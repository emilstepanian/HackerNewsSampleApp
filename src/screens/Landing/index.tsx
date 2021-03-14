import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen } from '../../components';
import AppTitle from './AppTitle';
import Description from './Description';
import GetStartedButton from './GetStartedButton';

const LandingScreen = () => {
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
