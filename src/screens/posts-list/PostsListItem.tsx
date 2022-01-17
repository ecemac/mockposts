import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Posts} from '../../services/types';
import {RootStackParamList} from '../../master/navigation';
import {UserInfo} from '../../components/UserInfo';
import {ContainerView, PostImage, PostText} from './styles';

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
        <PostText numberOfLines={1}>{text}</PostText>
      </TouchableOpacity>
    </ContainerView>
  );
};
