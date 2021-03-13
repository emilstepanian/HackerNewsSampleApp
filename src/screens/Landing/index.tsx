import React from 'react';
import { Screen, Text, View } from '../../components';
import { StyleSheet } from 'react-native';

const LandingScreen = () => {
  return (
    <Screen style={styles.container}>
      <View center middle>
        <View row>
          <Text h1 bold>
            {'Hacker' + ' '}
          </Text>
          <Text h1 bold primary>
            News
          </Text>
        </View>
        <Text gray h3>
          Sample App
        </Text>
      </View>
      <View center middle>
        <Text h2>Description goes here</Text>
      </View>
      <View center middle>
        <Text h2>Description goes here</Text>
      </View>
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
