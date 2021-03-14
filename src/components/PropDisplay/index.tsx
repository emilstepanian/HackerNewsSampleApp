import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Palette, Sizes } from '../../constants';
interface Props {
  value: string | number;
  prop: string;
  onPropPress?: () => void;
}

const PropDisplay = ({ value, prop, onPropPress }: Props) => {
  return (
    <ListItem
      disabled={!onPropPress}
      onPress={() => onPropPress && onPropPress()}>
      <ListItem.Content>
        <ListItem.Subtitle style={styles.subtitle}>{prop}</ListItem.Subtitle>
        <ListItem.Title>{value}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    paddingTop: Sizes.radius,
    color: Palette.secondary,
  },
});

export default PropDisplay;
