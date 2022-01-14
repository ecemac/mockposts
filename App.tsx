/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import generateStore from './src/store';
import {Navigation} from './src/master/navigation';

if (__DEV__) {
  import('./src/services/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
