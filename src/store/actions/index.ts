import {
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
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

import {Posts, PostDetail, UserDetail} from '../../services/types';
import {PostsService, UserService} from '../../services';
import {Dispatch} from 'redux';

export const getPostListAction =
  (page: number) => async (dispatch: Dispatch<PostListDispatchTypes>) => {
    try {
      dispatch({
        type: POST_LIST_LOADING,
      });
      const res: Posts[] = await PostsService.getPostsList(page);

      dispatch({
        type: POST_LIST_SUCCESS,
        payload: res,
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
