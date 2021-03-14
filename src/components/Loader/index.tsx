import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Text from '../Text';
import { Palette, Sizes } from '../../constants';
import View from '../View';

interface Props {
  size?: 'small' | 'large';
  loadingText?: string;
}

const Loader = ({ size = 'large', loadingText }: Props) => {
  return (
    <View style={styles.container}>
      {loadingText && (
        <Text h3 center bold>
          {loadingText}
        </Text>
      )}
      <ActivityIndicator
        style={styles.activityIndicator}
        size={size}
        color={Palette.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  activityIndicator: {
    padding: Sizes.base,
  },
});

export default Loader;
