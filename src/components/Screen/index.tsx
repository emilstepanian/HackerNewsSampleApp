import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { Sizes } from '../../constants';

interface ScreenProps extends SafeAreaViewProps {}

const Screen = ({ children, style = styles.container }: ScreenProps) => {
  return <SafeAreaView {...style}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flex: 1,
    padding: Sizes.padding,
  },
});

export default Screen;
