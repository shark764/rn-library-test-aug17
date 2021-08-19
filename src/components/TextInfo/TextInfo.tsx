import React from 'react';
import styled from 'styled-components/native';
import type { Props } from './types';

const StyledText = styled.Text<{ color: string; size: number }>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;

const sizesMap: { [key: string]: number } = {
  default: 14,
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 18,
  xlarge: 22,
};
const getFontSize = (size: string) => sizesMap[size];

const SdsText = ({
  content,
  // type = 'base',
  size = 'default',
  color = 'green',
  children,
}: Props) => {
  const fontSize = getFontSize(size);
  return (
    <StyledText size={fontSize} color={color}>
      {content}
      {children}
    </StyledText>
  );
};

export default SdsText;
