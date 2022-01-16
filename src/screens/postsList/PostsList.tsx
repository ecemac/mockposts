import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, RefreshControl} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getPostListAction} from '../../store/actions';
import {Header} from '../../components/Header';
import {Posts} from '../../services/types';
import {PostsListItem} from './PostsListItem';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import styled from 'styled-components/native';

const INITIAL_PAGE = 20;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fff;
`;

const StyledFlatlist = styled.FlatList`
  padding: 10px;
  background-color: #efefef;
`;

export const PostsList = () => {
  const dispatch = useDispatch();
  const {posts, loading, moreLoading, refreshing, error} = useAppSelector(
    state => state.postList,
  );

  const [refreshPage, setRefreshPage] = useState(INITIAL_PAGE);
  const [loadMorePage, setLoadMorePage] = useState(INITIAL_PAGE);

  useEffect(() => {
    dispatch(getPostListAction(INITIAL_PAGE, false, false));
    setLoadMorePage(INITIAL_PAGE + 1);
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Posts>) => (
    <PostsListItem
      id={item.id}
      image={item.image}
      likes={item.likes}
      tags={item.tags}
      text={item.text}
      publishDate={item.publishDate}
      owner={item.owner}
    />
  );

  const handleRefresh = () => {
    if (refreshPage > 0) {
      setRefreshPage(refreshPage - 1);
      dispatch(getPostListAction(refreshPage - 1, true, false));
      setLoadMorePage(refreshPage);
    }
  };

  const handleLoadMore = () => {
    if (!moreLoading) {
      dispatch(getPostListAction(loadMorePage, false, true));
      setLoadMorePage(loadMorePage + 1);
    }
  };

  return (
    <StyledSafeAreaView>
      <Header title={'Home'} />
      {posts && (
        <StyledFlatlist<React.ElementType>
          data={posts}
          keyExtractor={(item: Posts) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          onEndReachedThreshold={0.2}
          onEndReached={handleLoadMore}
        />
      )}
      {loading && <Loading />}
      {error && <Error />}
    </StyledSafeAreaView>
  );
};
