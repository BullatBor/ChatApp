import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './App';
import ProfileStore from './redux/redux-store';
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ProfileStore}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
);




