import React, { Component } from 'react';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './App.css';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);


export default App;
