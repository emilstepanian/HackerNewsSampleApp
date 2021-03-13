import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { StandardProps } from './types';
import { Palette } from '../../constants';

const StandardButton = ({
  style,
  color = Palette.white,
  activeOpacity = 0.8,
  shadow,
  children,
  ...props
}: StandardProps) => {
  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && { backgroundColor: color },
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={activeOpacity}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default StandardButton;
