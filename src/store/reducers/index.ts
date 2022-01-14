import {combineReducers} from 'redux';
import postListReducer from './postListReducer';
import postDetailReducer from './postDetailReducer';
import userDetailReducer from './userReducer';

const rootReducer = combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
  userDetail: userDetailReducer,
});

export default rootReducer;
