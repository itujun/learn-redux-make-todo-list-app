import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Implementasi Redux
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers'; // harusnya namnaya rootReducer, namun karena yg di export hanya 1. jadi tidak masalah untuk namanya

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
