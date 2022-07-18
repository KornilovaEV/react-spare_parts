import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import {Adaptability} from './head';
import 'macro-css';
import Footer from './components/Footer';

//import UserStore from "./store/UserStore";
//import DeviceStore from "./store/DeviceStore";

export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Adaptability/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
