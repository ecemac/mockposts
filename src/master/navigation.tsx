import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PostsList} from '../screens/PostsList';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={PostsList}
          options={{title: 'MOCKPOSTS'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
