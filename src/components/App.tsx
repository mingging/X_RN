import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducers from '@store/rootReducers';
import React from 'react';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface Props {}

const myStore = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

const App = (props: Props) => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <Provider store={myStore}>
        <RootNavigationContainer />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
