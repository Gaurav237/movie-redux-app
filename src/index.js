import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers'

const store = createStore(movies);
console.log('store', store);
console.log('before action state', store.getState());

// using dispatch we can send actions to reducer
store.dispatch({
  type: 'ADD_MOVIES',
  movies: [{ name: 'SuperMan' }]
});

console.log('after action state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
