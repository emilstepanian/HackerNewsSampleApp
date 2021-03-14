import React from 'react';
import { styles } from './styles';
import { NavBackProps } from './types';
import Icon from '../Icon';
import { View } from '..';

const NavBackButton = ({ onNavBack }: NavBackProps) => {
  return (
    <View style={styles.navBackButton}>
      <Icon onPress={onNavBack} name="chevron-thin-left" />
    </View>
  );
};

export default NavBackButton;
