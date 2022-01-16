import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Posts} from '../../services/types';
import {RootStackParamList} from '../../master/navigation';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

const UserContainerView = styled.View`
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

export const PostsListItem: React.FC<Posts> = ({id, image, text, owner}) => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ContainerView>
      <UserContainerView>
        <UserPictureImage source={{uri: owner.picture}} />
        <UserNameText>
          {owner.firstName} {owner.lastName}
        </UserNameText>
      </UserContainerView>
      <TouchableOpacity onPress={() => nav.navigate('PostDetail', {id})}>
        <PostImage source={{uri: image}} />
        <Text>{text}</Text>
      </TouchableOpacity>
    </ContainerView>
  );
};
