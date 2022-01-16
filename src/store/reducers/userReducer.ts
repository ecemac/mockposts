import {
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
  USER_RESET,
  UserDetailDispatchTypes,
} from '../types';

import {UserDetail} from '../../services/types';

interface IInitialState {
  data: UserDetail | null;
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  data: null,
  loading: false,
  error: false,
};

const userDetailReducer = (
  state: IInitialState = initialState,
  action: UserDetailDispatchTypes,
): IInitialState => {
  switch (action.type) {
    case USER_LOADING:
      return {...state, loading: true};
    case USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case USER_ERROR:
      return {...state, loading: false, error: true};
    case USER_RESET:
      return state;
    default:
      return state;
  }
};

export default userDetailReducer;
