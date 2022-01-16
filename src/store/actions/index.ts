import {
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
  POST_LIST_REFRESH_LOADING,
  POST_LIST_REFRESH,
  POST_LIST_LOAD_MORE_LOADING,
  POST_LIST_LOAD_MORE,
  POST_LIST_ERROR,
  POST_LOADING,
  POST_SUCCESS,
  POST_ERROR,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
  PostListDispatchTypes,
  PostDetailDispatchTypes,
  UserDetailDispatchTypes,
} from '../types';

import {
  Posts,
  PostsResponse,
  PostDetail,
  UserDetail,
} from '../../services/types';
import {PostsService, UserService} from '../../services';
import {Dispatch} from 'redux';

export const getPostListAction =
  (page: number, refresh: boolean, loadMore: boolean) =>
  async (dispatch: Dispatch<PostListDispatchTypes>) => {
    const res: PostsResponse = await PostsService.getPostsList(page);

    try {
      dispatch({
        type: refresh
          ? POST_LIST_REFRESH_LOADING
          : loadMore
          ? POST_LIST_LOAD_MORE_LOADING
          : POST_LIST_LOADING,
        payload: res,
      });

      dispatch({
        type: refresh
          ? POST_LIST_REFRESH
          : loadMore
          ? POST_LIST_LOAD_MORE
          : POST_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POST_LIST_ERROR,
      });
    }
  };

export const getPostDetailAction =
  (id: string) => async (dispatch: Dispatch<PostDetailDispatchTypes>) => {
    try {
      dispatch({
        type: POST_LOADING,
      });

      const res: PostDetail = await PostsService.getPostDetail(id);

      dispatch({
        type: POST_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: POST_ERROR,
      });
    }
  };

export const getUserDetailAction =
  (id: string) => async (dispatch: Dispatch<UserDetailDispatchTypes>) => {
    try {
      dispatch({
        type: USER_LOADING,
      });

      const res: UserDetail = await UserService.getUserDetail(id);

      dispatch({
        type: USER_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: USER_ERROR,
      });
    }
  };
