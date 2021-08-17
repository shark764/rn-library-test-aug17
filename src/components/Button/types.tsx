import type * as React from 'react';
import type { ButtonProps } from 'react-native';

type Types =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'dangeralt'
  | 'info';

type Sizes = 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type Position = 'start' | 'end';

export type Props = ButtonProps & {
  content?: string;
  type?: Types;
  size?: Sizes;
  icon?: boolean;
  iconPosition?: Position;
  iconName?: string;
  children?: React.ReactNode;
};
