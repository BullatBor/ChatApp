import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfileStore from './redux/redux-store';
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={ProfileStore}>
        <App/>
      </Provider>
    </React.StrictMode>
  );




