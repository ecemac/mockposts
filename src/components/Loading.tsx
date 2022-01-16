import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  padding: 20px;
`;

const StyledText = styled.Text`
  text-align: center;
  font-weight: bold;
`;

export const Loading: React.FC = () => {
  return (
    <StyledView>
      <StyledText>Loading...</StyledText>
    </StyledView>
  );
};
