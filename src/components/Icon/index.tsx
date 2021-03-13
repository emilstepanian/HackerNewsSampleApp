import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { Palette } from '../../constants';

export interface Props extends IconProps {
  color?: Palette;
}

const CustomIcon = ({
  type = 'entypo',
  color = Palette.black,
  ...props
}: Props) => <Icon type={type} color={color} {...props} />;

export default CustomIcon;
