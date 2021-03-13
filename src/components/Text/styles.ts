import { StyleSheet } from 'react-native';

import { Palette, Font } from '../../constants';

export const styles = StyleSheet.create({
  text: {
    fontSize: Font.body,
    color: Palette.black,
  },

  bold: {
    fontWeight: 'bold',
  },

  center: { textAlign: 'center' },

  accent: { color: Palette.accent },
  primary: { color: Palette.primary },
  secondary: { color: Palette.secondary },
  white: { color: Palette.white },
  gray: { color: Palette.gray },
  h1: { fontSize: Font.h1 },
  h2: { fontSize: Font.h2 },
  h3: { fontSize: Font.h3 },
  body: { fontSize: Font.body },
  caption: { fontSize: Font.caption },
});
