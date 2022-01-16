import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Posts} from '../../services/types';
import {RootStackParamList} from '../../master/navigation';
import {UserInfo} from '../../components/UserInfo';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
`;

export const PostsListItem: React.FC<Posts> = ({id, image, text, owner}) => {
  const nav = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ContainerView>
      <UserInfo
        id={owner.id}
        firstName={owner.firstName}
        lastName={owner.lastName}
        picture={owner.picture}
      />
      <TouchableOpacity onPress={() => nav.navigate('PostDetail', {id})}>
        <PostImage source={{uri: image}} />
        <Text>{text}</Text>
      </TouchableOpacity>
    </ContainerView>
  );
};
