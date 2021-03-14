import { StyleSheet } from 'react-native';
import { Palette, Sizes } from '../../constants';

export const styles = StyleSheet.create({
  listItemBadge: {
    backgroundColor: Palette.secondary,
  },
  listItemSubtitle: {
    paddingTop: Sizes.radius,
    color: Palette.tertiary,
  },
});
