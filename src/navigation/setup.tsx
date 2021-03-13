import { TransitionPresets } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { Palette } from '../constants';

export const defaultNavigationOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: Palette.white },
};

export const rootStackOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

export const transitionOptions: StackNavigationOptions = {
  gestureEnabled: true,
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
