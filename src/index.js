import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import addMovieReducer from './reducers/index';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

let myStore = createStore(addMovieReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);