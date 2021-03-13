import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GradientProps } from './types';
import LinearGradient from 'react-native-linear-gradient';
import { Palette } from '../../constants';

const GradientButton = ({
  style,
  activeOpacity = 0.8,
  startColor = Palette.primary,
  endColor = Palette.secondary,
  shadow = true,
  children,
  ...props
}: GradientProps) => {
  const buttonStyles = [styles.button, shadow && styles.shadow, style];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={activeOpacity}
      {...props}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0.1, 0.9]}
        style={buttonStyles}
        colors={[startColor, endColor]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
