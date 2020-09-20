import { createStore, applyMiddleware } from 'redux';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';

import AppStack from './src/routes/AppStack';
import rootReducer from './src/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
      <Provider store={store}>
        <AppStack />
        <StatusBar style="auto" />
      </Provider>
  );
}
