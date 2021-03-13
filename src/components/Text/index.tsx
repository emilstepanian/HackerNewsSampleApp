import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';

const AppText = ({
  h1,
  h2,
  h3,
  body,
  children,
  caption,
  bold,
  accent,
  primary,
  secondary,
  white,
  gray,
  style,
  ...props
}: Props) => {
  const textStyling = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    body && styles.body,
    caption && styles.caption,
    bold && styles.bold,
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    white && styles.white,
    gray && styles.gray,
    style,
  ];

  return (
    <Text style={textStyling} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
