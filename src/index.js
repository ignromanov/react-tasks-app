// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './init';
// antd
// import { LocaleProvider } from 'antd';
// import ruRU from 'antd/lib/locale-provider/ru_RU';
// Styles
// import 'antd/dist/antd.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Theme
// import './theme/init';
// Page
import { MainOrderedList } from './pages';

ReactDOM.render(
  <Provider store = { store }>
    <MainOrderedList/>
  </Provider>,
  document.getElementById('root'),
);
