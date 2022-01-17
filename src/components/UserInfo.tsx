import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../master/navigation';
import React from 'react';
import styled from 'styled-components/native';

const UserContainerTouchable = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const UserPictureImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;

const UserNameText = styled.Text`
  font-weight: bold;
`;

type IUserInfoProps = {
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export const UserInfo: React.FC<IUserInfoProps> = ({
  id,
  firstName,
  lastName,
  picture,
}) => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <UserContainerTouchable onPress={() => nav.navigate('UserDetail', {id})}>
      <UserPictureImage source={{uri: picture}} />
      <UserNameText>
        {firstName} {lastName}
      </UserNameText>
    </UserContainerTouchable>
  );
};
