import React from 'react';
import { styles } from './styles';
import { NavBackProps } from './types';
import Icon from '../Icon';

const NavBackButton = ({ onNavBack }: NavBackProps) => {
  return (
    <Icon
      style={styles.navBackButton}
      onPress={onNavBack}
      name="chevron-thin-left"
    />
  );
};

export default NavBackButton;
