import React, {useEffect, useState, memo} from 'react';
import {ListRenderItemInfo, RefreshControl} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getPostListAction} from '../../store/actions';
import {Header} from '../../components/Header';
import {Posts} from '../../services/types';
import {PostsListItem} from './PostsListItem';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import {StyledSafeAreaView} from '../common-styling';
import {StyledFlatlist} from './styles';

const INITIAL_PAGE = 20;

export const PostsList = () => {
  const dispatch = useDispatch();
  const {posts, loading, moreLoading, refreshing, error} = useAppSelector(
    state => state.postList,
  );

  const [refreshPage, setRefreshPage] = useState(INITIAL_PAGE);
  const [loadMorePage, setLoadMorePage] = useState(INITIAL_PAGE + 1);

  useEffect(() => {
    dispatch(getPostListAction(INITIAL_PAGE, false, false));
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
      dispatch(getPostListAction(refreshPage - 1, true, false));
      setRefreshPage(refreshPage - 1);
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
      {posts && !loading && (
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

export const MemoizedPostsList = React.memo(PostsList);
