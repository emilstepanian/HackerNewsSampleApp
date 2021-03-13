import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

const AppView = ({
  center,
  middle,
  row,
  left,
  right,
  top,
  bottom,
  style,
  children,
  ...props
}: Props) => {
  const ViewStyling = [
    center && styles.center,
    row && styles.row,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    style,
  ];

  return (
    <View style={ViewStyling} {...props}>
      {children}
    </View>
  );
};
export default AppView;
