import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import listReducer from './reducers/listReducer';
import GlobalStyle from './components/styles/Global';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {reducer:listReducer},
  composeEnhancers(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
    </GlobalStyle>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

