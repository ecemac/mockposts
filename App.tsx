/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState, useEffect} from 'react';
import {AppState} from 'react-native';
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
  const appState = useRef(AppState.currentState);
  const [state, setState] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setState(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Provider store={store}>{state === 'active' && <Navigation />}</Provider>
  );
};

export default App;
