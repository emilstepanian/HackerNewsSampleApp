import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Palette } from '../../constants';
import { Props as TextProps } from '../Text/types';

export interface StandardProps extends TouchableOpacityProps {
  shadow?: boolean;
  children?: ReactElement<TextProps>;
  color?: Palette;
}

export interface GradientProps extends StandardProps {
  startColor?: Palette;
  endColor?: Palette;
}

export interface NavBackProps {
  onNavBack: () => void;
}
