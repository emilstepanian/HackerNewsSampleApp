import { ReactElement } from 'react';
import { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children: ReactElement;
}
