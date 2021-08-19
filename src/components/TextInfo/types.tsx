import type * as React from 'react';
import type { TextProps } from 'react-native';

export type Types =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'dangeralt'
  | 'info';

export type Sizes = 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export type Props = TextProps & {
  content?: string;
  type?: Types;
  size?: Sizes;
  children?: React.ReactNode;
  color?: string;
};
