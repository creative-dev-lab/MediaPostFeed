/**
 * @author Eli Zhang
 * created on 8/14/2020
 * modified on 8/14/2020
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/router';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}