import React from 'react';
import { Screen, Text, View } from '../../components';
import { StyleSheet } from 'react-native';
import { GradientButton } from '../../components';
import { useLabels } from '../../hooks/useLabels';

const LandingScreen = () => {
  const { landing } = useLabels();

  return (
    <Screen style={styles.container}>
      <View center middle>
        <View row>
          <Text h1 bold>
            {landing.headerTitleStart + ' '}
          </Text>
          <Text h1 bold primary>
            {landing.headerTitleEnd}
          </Text>
        </View>
        <Text gray h3>
          {landing.headerSubtitle}
        </Text>
      </View>
      <View center middle>
        <Text h2>{landing.description}</Text>
      </View>
      <View middle>
        <GradientButton>
          <Text white bold center>
            {landing.getStartedButtonText}
          </Text>
        </GradientButton>
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
