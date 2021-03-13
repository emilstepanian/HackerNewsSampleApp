import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  center?: boolean;
  middle?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  row?: boolean;
  children: ReactNode;
}
