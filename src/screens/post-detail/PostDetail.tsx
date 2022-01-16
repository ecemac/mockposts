import {format} from 'date-fns';
import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getPostDetailAction, postDetailReset} from '../../store/actions';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../master/navigation';
import {UserInfo} from '../../components/UserInfo';
import {Header} from '../../components/Header';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fff;
`;

const StyledContainerView = styled.View`
  background-color: #efefef;
  padding: 10px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 450px;
  margin-bottom: 10px;
`;

const BodyView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const BodyText = styled.Text`
  font-weight: bold;
`;

const TagContainerView = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const TagView = styled.View`
  padding: 5px 10px;
  background-color: coral;
  border-radius: 50px;
  margin-right: 5px;
`;

const TagText = styled.Text`
  color: #fff;
`;

export const PostDetail: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'PostDetail'>>();
  const {id} = route.params;
  const dispatch = useDispatch();
  const {data, loading, error} = useAppSelector(state => state.postDetail);

  useEffect(() => {
    dispatch(getPostDetailAction(id));

    return () => {
      dispatch(postDetailReset());
    };
  }, []);

  return (
    <StyledSafeAreaView>
      <Header title={'Post Detail'} canGoBack />
      {data && !loading && (
        <StyledContainerView>
          <UserInfo
            id={data.owner.id}
            firstName={data.owner.firstName}
            lastName={data.owner.lastName}
            picture={data.owner.picture}
          />

          <PostImage source={{uri: data.image}} />
          <BodyView>
            <BodyText>Likes: {data.likes}</BodyText>
            <BodyText>
              {format(new Date(data?.publishDate), 'dd MMM yyyy')}
            </BodyText>
          </BodyView>
          <Text>{data.text}</Text>

          <TagContainerView>
            {data.tags.map(t => (
              <TagView key={t}>
                <TagText>#{t}</TagText>
              </TagView>
            ))}
          </TagContainerView>
        </StyledContainerView>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </StyledSafeAreaView>
  );
};
