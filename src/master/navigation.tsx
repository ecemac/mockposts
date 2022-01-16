import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsList} from '../screens/posts-list/PostsList';
import {PostDetail} from '../screens/post-detail/PostDetail';
import {UserDetail} from '../screens/user-detail/UserDetail';

export type RootStackParamList = {
  Home: undefined;
  PostDetail: {id: string};
  UserDetail: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={PostsList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
