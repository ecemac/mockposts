import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView`
  background-color: #f1f1f1;
`;

export const StyledContainerView = styled.View`
  background-color: #f1f1f1;
  padding: 10px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 500px;
  margin-bottom: 10px;
`;

export const BodyView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const BodyText = styled.Text`
  font-weight: bold;
`;

export const TagContainerView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const TagView = styled.View`
  padding: 5px 10px;
  background-color: coral;
  border-radius: 50px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: #fff;
`;
