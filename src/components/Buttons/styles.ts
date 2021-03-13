import { StyleSheet } from 'react-native';

import { Palette, Sizes } from '../../constants';

export const styles = StyleSheet.create({
  button: {
    borderRadius: Sizes.radius,
    height: Sizes.base * 3,
    justifyContent: 'center',
    marginVertical: Sizes.padding / 3,
    paddingHorizontal: Sizes.padding,
  },
  shadow: {
    shadowColor: Palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 0, //3
  },

  navBackButton: {
    alignItems: 'flex-start',
    paddingBottom: Sizes.base,
  },
});
