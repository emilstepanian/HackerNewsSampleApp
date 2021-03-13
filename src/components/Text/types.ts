import { ReactText } from 'react';
import { TextProps } from 'react-native';

export interface Props extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  body?: boolean;
  caption?: boolean;
  bold?: boolean;
  accent?: boolean;
  primary?: boolean;
  secondary?: boolean;
  white?: boolean;
  gray?: boolean;
  children: ReactText;
}
