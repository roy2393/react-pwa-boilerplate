import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '../core/redux/store/index';
import Counter from './src/components/Counter';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>, document.getElementById('app'));
