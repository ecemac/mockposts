import {
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
  POST_LIST_REFRESH_LOADING,
  POST_LIST_REFRESH,
  POST_LIST_LOAD_MORE_LOADING,
  POST_LIST_LOAD_MORE,
  POST_LIST_ERROR,
  PostListDispatchTypes,
} from '../types';

import {Posts} from '../../services/types';

interface IInitialState {
  posts: Posts[];
  loading: boolean;
  refreshing: boolean;
  moreLoading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  posts: [],
  loading: false,
  refreshing: false,
  moreLoading: false,
  error: false,
};

const postListReducer = (
  state: IInitialState = initialState,
  action: PostListDispatchTypes,
): IInitialState => {
  switch (action.type) {
    case POST_LIST_LOADING:
      return {...state, loading: true};
    case POST_LIST_REFRESH_LOADING:
      return {...state, posts: [], refreshing: true};
    case POST_LIST_LOAD_MORE_LOADING:
      return {...state, moreLoading: true};
    case POST_LIST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        moreLoading: false,
        refreshing: false,
        error: false,
      };
    case POST_LIST_REFRESH:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        moreLoading: false,
        refreshing: false,
        error: false,
      };
    case POST_LIST_LOAD_MORE:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
        moreLoading: false,
        refreshing: false,
        error: false,
      };
    case POST_LIST_ERROR:
      return {
        ...state,
        loading: false,
        moreLoading: false,
        refreshing: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postListReducer;
