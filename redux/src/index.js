import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import { Provider, createStoreHook } from 'react-redux';
import rootReducer from './Services/Reducers/index';

const store = configureStore({
  reducer: rootReducer
});

console.warn("store data" , store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);

reportWebVitals();
