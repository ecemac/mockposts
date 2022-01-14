import axios from 'axios';
import {API_BASE_URL} from './config';
import {Posts, PostDetail, UserDetail} from './types';

const client = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    'app-id': '61e0191528318d59db94d882',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const PostsService = {
  getPostsList: async (page: number): Promise<Posts[]> => {
    return client
      .get(`post?page=${page}&limit=10`)
      .then(res => {
        return res.data;
      })
      .catch(e => {});
  },

  getPostDetail: async (id: string): Promise<PostDetail> => {
    return client.get(`/post/${id}`).then(res => {
      return res.data;
    });
  },
};

export const UserService = {
  getUserDetail: async (id: string): Promise<UserDetail> => {
    return client.get(`/user/${id}`).then(res => {
      return res.data;
    });
  },
};
