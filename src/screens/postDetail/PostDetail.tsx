import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Header} from '../../components/Header';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fff;
`;

const StyledContainerView = styled.View`
  background-color: #efefef;
`;

export const PostDetail: React.FC = () => {
  const route = useRoute();
  console.log('ROUTE: ', route.params);
  return (
    <StyledSafeAreaView>
      <Header title={'Post Detail'} canGoBack />
      <StyledContainerView>
        <Text>Post Detail</Text>
      </StyledContainerView>
    </StyledSafeAreaView>
  );
};
