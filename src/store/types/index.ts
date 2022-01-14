import {Posts, PostDetail, UserDetail} from '../../services/types';
export const USER_TODO = 'USER_TODO';

export const POST_LIST_LOADING = 'POST_LIST_LOADING';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_ERROR = 'POST_LIST_ERROR';

export const POST_LOADING = 'POST_LOADING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';

export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';

export interface PostListLoading {
  type: typeof POST_LIST_LOADING;
}

export interface PostListSuccess {
  type: typeof POST_LIST_SUCCESS;
  payload: Posts[];
}

export interface PostListError {
  type: typeof POST_LIST_ERROR;
}

export interface PostLoading {
  type: typeof POST_LOADING;
}

export interface PostSuccess {
  type: typeof POST_SUCCESS;
  payload: PostDetail;
}

export interface PostError {
  type: typeof POST_ERROR;
}

export interface UserLoading {
  type: typeof USER_LOADING;
}

export interface UserSuccess {
  type: typeof USER_SUCCESS;
  payload: UserDetail;
}

export interface UserError {
  type: typeof USER_ERROR;
}

export type PostListDispatchTypes =
  | PostListLoading
  | PostListSuccess
  | PostListError;
export type PostDetailDispatchTypes = PostLoading | PostSuccess | PostError;
export type UserDetailDispatchTypes = UserLoading | UserSuccess | UserError;
