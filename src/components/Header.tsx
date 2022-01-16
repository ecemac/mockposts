import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

interface IHeaderProps {
  title: string;
  canGoBack?: boolean;
}

const StyledHeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 20px 10px;
`;

const StyledButton = styled.TouchableOpacity`
  flex: 1;
`;

const StyledButtonText = styled.Text`
  font-size: 14px;
  color: blue;
`;

const StyledTitleText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const StyledEmptyView = styled.View`
  flex: 1;
`;

export const Header: React.FC<IHeaderProps> = ({title, canGoBack}) => {
  const nav = useNavigation();
  return (
    <StyledHeaderView>
      {canGoBack && (
        <StyledButton onPress={() => nav.goBack()}>
          <StyledButtonText>Go Back</StyledButtonText>
        </StyledButton>
      )}
      <StyledTitleText style={{textAlign: 'center'}}>{title}</StyledTitleText>
      {canGoBack && <StyledEmptyView />}
    </StyledHeaderView>
  );
};
