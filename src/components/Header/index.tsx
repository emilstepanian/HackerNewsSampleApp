import React from 'react';
import { StyleSheet } from 'react-native';
import { Sizes } from '../../constants';
import NavBackButton from '../Buttons/NavBack';
import Text from '../Text';
import View from '../View';

interface Props {
  title: string;
  onNavBack?: () => void;
}

const Header = ({ title, onNavBack }: Props) => {
  const headerTitle = (
    <Text h1 bold>
      {title}
    </Text>
  );

  const navBack = onNavBack && <NavBackButton onNavBack={onNavBack} />;

  return (
    <View style={styles.container}>
      <View>
        {navBack}
        {headerTitle}
      </View>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    paddingTop: Sizes.base,
  },
});

export default Header;
