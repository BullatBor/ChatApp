import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfileStore from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Rerender= (state) => {

  root.render(
    <React.StrictMode>
      <App state={state} dispatch={ProfileStore.dispatch.bind(ProfileStore)} store={ProfileStore}/>
    </React.StrictMode>
  );
}

Rerender(ProfileStore.getState());

ProfileStore.subscribe(() => {
  let state = ProfileStore.getState();
  Rerender(state)
})



