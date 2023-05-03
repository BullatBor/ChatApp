import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfileStore from './redux/redux-store';
import StoreContext from './StoreContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Rerender= (state) => {

  root.render(
    <React.StrictMode>
          <BrowserRouter>
              <StoreContext.Provider value={ProfileStore}>
                  <App />
              </StoreContext.Provider>
          </BrowserRouter>
    </React.StrictMode>
  );
}

Rerender(ProfileStore.getState());

ProfileStore.subscribe(() => {
  let state = ProfileStore.getState();
  Rerender(state)
})



