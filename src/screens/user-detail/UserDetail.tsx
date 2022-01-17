import {format} from 'date-fns';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hooks';
import {getUserDetailAction, userDetailReset} from '../../store/actions';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../master/navigation';
import {Header} from '../../components/Header';
import {Loading} from '../../components/Loading';
import {Error} from '../../components/Error';
import {StyledSafeAreaView} from '../common-styling';
import {
  StyledContainerView,
  UserImage,
  UserInfoView,
  UserInfoTitleText,
  UserInfoText,
} from './styles';

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

  return (
    <StyledSafeAreaView>
      <Header title="User Detail" canGoBack />
      {data && !loading && (
        <StyledContainerView>
          <UserImage source={{uri: data.picture}} />
          <UserInfoView>
            <UserInfoTitleText>Full Name: </UserInfoTitleText>
            <UserInfoText>
              {data.title} {data.firstName} {data.lastName}
            </UserInfoText>
          </UserInfoView>
          <UserInfoView>
            <UserInfoTitleText>Email: </UserInfoTitleText>
            <UserInfoText>{data.email}</UserInfoText>
          </UserInfoView>
          <UserInfoView>
            <UserInfoTitleText>Date of Birth: </UserInfoTitleText>
            <UserInfoText>
              {format(new Date(data.dateOfBirth), 'dd MMM yyyy')}
            </UserInfoText>
          </UserInfoView>
          <UserInfoView>
            <UserInfoTitleText>Last Updated: </UserInfoTitleText>
            <UserInfoText>
              {format(new Date(data.updatedDate), 'dd MMM yyyy')}
            </UserInfoText>
          </UserInfoView>
          <UserInfoView>
            <UserInfoTitleText>Address: </UserInfoTitleText>
            <UserInfoText>
              {data.location.street} {data.location.city}, {data.location.state}
              /{data.location.country}
            </UserInfoText>
          </UserInfoView>
        </StyledContainerView>
      )}
      {loading && <Loading />}
      {error && <Error />}
    </StyledSafeAreaView>
  );
};
