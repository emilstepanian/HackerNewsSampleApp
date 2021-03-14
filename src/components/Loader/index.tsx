import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Palette } from '../../constants';
import View from '../View';

interface Props {
  size?: 'small' | 'large';
}

const Loader = ({ size = 'large' }: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={Palette.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
