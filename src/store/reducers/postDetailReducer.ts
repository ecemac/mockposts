import {
  POST_LOADING,
  POST_SUCCESS,
  POST_ERROR,
  POST_RESET,
  PostDetailDispatchTypes,
} from '../types';

import {PostDetail} from '../../services/types';

interface IInitialState {
  data: PostDetail | null;
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: null,
  loading: false,
  error: false,
};

const postDetailReducer = (
  state: IInitialState = initialState,
  action: PostDetailDispatchTypes,
): IInitialState => {
  switch (action.type) {
    case POST_LOADING:
      return {...state, loading: true};
    case POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case POST_ERROR:
      return {...state, loading: false, error: true};
    case POST_RESET:
      return state;
    default:
      return state;
  }
};

export default postDetailReducer;
