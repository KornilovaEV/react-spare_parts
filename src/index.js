import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import {Adaptability} from './head/Adaptability';
import 'macro-css';

//import UserStore from "./store/UserStore";
//import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Adaptability/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
