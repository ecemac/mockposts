import styled from 'styled-components/native';

export const StyledContainerView = styled.View`
  background-color: #f1f1f1;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const UserInfoView = styled.View`
  width: 70%
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const UserInfoTitleText = styled.Text`
  font-weight: bold;
  text-align: left;
`;

export const UserInfoText = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  text-align: right;
`;
