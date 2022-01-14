import React, {useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../store/hooks';
import {Posts} from '../services/types';
import {getPostListAction} from '../store/actions';

const googleClient = axios.create({
  baseURL: `https://dummyapi.io/data/v1/post?limit=5&page=2`,
  headers: {
    'app-id': '61e0191528318d59db94d882',
  },
});

export const Google = {
  getGoogle: async (): Promise<any> => {
    return googleClient.get('/').then(res => {
      return res;
    });
  },
};

export const PostsList = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useAppSelector(state => state.postList);

  useEffect(() => {
    //Google.getGoogle();
    dispatch(getPostListAction(1));
  }, []);
  console.log('DATA: ', data);

  return (
    <SafeAreaView>
      <Text>POSTS LIST</Text>
    </SafeAreaView>
  );
};
