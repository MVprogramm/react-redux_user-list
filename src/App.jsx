import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import Users from './users/Users.jsx';
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App;