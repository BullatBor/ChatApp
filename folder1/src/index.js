import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let DialogsData = [
  {id: 1, name: "Erdem"},
  {id: 2, name: "Timur"},
  {id: 3, name: "Dashi"},
]

let Messages = [
  {id: 1, message: "sdfsdf"},
  {id: 2, message: "sdfs"},
  {id: 3, message: "sdfsdfwqwe31"}
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Dialog={DialogsData} Messages={Messages}/>
  </React.StrictMode>
);


