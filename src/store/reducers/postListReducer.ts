import {
  POST_LIST_LOADING,
  POST_LIST_SUCCESS,
  POST_LIST_ERROR,
  PostListDispatchTypes,
} from '../types';

import {Posts} from '../../services/types';

interface IInitialState {
  data: Posts[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: [],
  loading: false,
  error: false,
};

const postListReducer = (
  state: IInitialState = initialState,
  action: PostListDispatchTypes,
): IInitialState => {
  switch (action.type) {
    case POST_LIST_LOADING:
      return {...state, loading: true};
    case POST_LIST_SUCCESS:
      return {...state, data: action.payload, loading: false, error: false};
    case POST_LIST_ERROR:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
};

export default postListReducer;
