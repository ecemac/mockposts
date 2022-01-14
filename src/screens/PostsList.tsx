import React, {useEffect} from 'react';
import axios from 'axios';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../store/hooks';
import {Posts} from '../services/types';
import {getPostListAction} from '../store/actions';

export const PostsList = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useAppSelector(state => state.postList);

  useEffect(() => {
    dispatch(getPostListAction(3));
  }, []);

  console.log('DATA: ', data);

  return (
    <SafeAreaView>
      <Text>POSTS LIST</Text>
    </SafeAreaView>
  );
};
