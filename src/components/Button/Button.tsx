import React from 'react';

// import { Button } from 'react-native';
import styled from 'styled-components/native';
import type { Props } from './types';

// const StyledButton = styled.Button`
//   background-color: #4512dc;
//   color: #1911da;
//   border-radius: 8px;
// `;
const TouchableButton = styled.TouchableOpacity<{ color: string }>`
  margin-top: 20px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  padding: 10px;
`;
const ButtonText = styled.Text`
  font-size: 28px;
  color: #4512dc;
`;

const SdsButton = ({
  title,
  // content,
  // type = 'base',
  // size = 'default',
  // icon = false,
  // iconPosition,
  // iconName,
  disabled = false,
  onPress,
  color = 'green',
}: // children,
// ...props
Props) => {
  return (
    <TouchableButton onPress={onPress} disabled={disabled} color={color}>
      {/* {icon && iconName && (
        <Telicon
          name={iconName}
          size={size === 'Large' ? 'Medium' : 'Default'}
        />
      )} */}
      {/* {content && <span>{content}</span>} */}
      <ButtonText>{title.toUpperCase()}</ButtonText>
    </TouchableButton>
  );
};

export default SdsButton;
