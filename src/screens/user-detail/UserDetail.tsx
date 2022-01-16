import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getUserDetailAction, userDetailReset} from '../../store/actions';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../master/navigation';
import {Header} from '../../components/Header';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #fff;
`;

const StyledContainerView = styled.View`
  background-color: #efefef;
  padding: 10px;
`;

export const UserDetail: React.FC = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RootStackParamList, 'UserDetail'>>();
  const {id} = route.params;
  const {data, loading, error} = useAppSelector(state => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetailAction(id));

    return () => {
      dispatch(userDetailReset());
    };
  }, []);

  console.log('data: ', data);

  return (
    <StyledSafeAreaView>
      <Header title="User Detail" canGoBack />
      {data && !loading && (
        <StyledContainerView>
          <Text>USER DETAIL</Text>
        </StyledContainerView>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </StyledSafeAreaView>
  );
};
