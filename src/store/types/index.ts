import {
  Posts,
  PostDetail,
  UserDetail,
  PostsResponse,
} from '../../services/types';
export const USER_TODO = 'USER_TODO';

export const POST_LIST_LOADING = 'POST_LIST_LOADING';
export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS';
export const POST_LIST_REFRESH_LOADING = 'POST_LIST_REFRESH_LOADING';
export const POST_LIST_REFRESH = 'POST_LIST_REFRESH';
export const POST_LIST_LOAD_MORE_LOADING = 'POST_LIST_LOAD_MORE_LOADING';
export const POST_LIST_LOAD_MORE = 'POST_LIST_LOAD_MORE';
export const POST_LIST_ERROR = 'POST_LIST_ERROR';
export const POST_LIST_RESET = 'POST_LIST_RESET';

export const POST_LOADING = 'POST_LOADING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';
export const POST_RESET = 'POST_RESET';

export const USER_LOADING = 'USER_LOADING';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_ERROR = 'USER_ERROR';
export const USER_RESET = 'USER_RESET';

export interface PostListLoading {
  type: typeof POST_LIST_LOADING;
  payload: PostsResponse;
}

export interface PostListSuccess {
  type: typeof POST_LIST_SUCCESS;
  payload: Posts[];
}

export interface PostListRefreshLoading {
  type: typeof POST_LIST_REFRESH_LOADING;
  payload: PostsResponse;
}

export interface PostListRefresh {
  type: typeof POST_LIST_REFRESH;
  payload: Posts[];
}

export interface PostListLoadMoreLoading {
  type: typeof POST_LIST_LOAD_MORE_LOADING;
  payload: PostsResponse;
}

export interface PostListLoadMore {
  type: typeof POST_LIST_LOAD_MORE;
  payload: Posts[];
}

export interface PostListError {
  type: typeof POST_LIST_ERROR;
}

export interface PostListReset {
  type: typeof POST_LIST_RESET;
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

export interface PostReset {
  type: typeof POST_RESET;
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

export interface UserReset {
  type: typeof USER_RESET;
}

export type PostListDispatchTypes =
  | PostListLoading
  | PostListSuccess
  | PostListRefreshLoading
  | PostListRefresh
  | PostListLoadMoreLoading
  | PostListLoadMore
  | PostListError
  | PostListReset;
export type PostDetailDispatchTypes =
  | PostLoading
  | PostSuccess
  | PostError
  | PostReset;
export type UserDetailDispatchTypes =
  | UserLoading
  | UserSuccess
  | UserError
  | UserReset;
