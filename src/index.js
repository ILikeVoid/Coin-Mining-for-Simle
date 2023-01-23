import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Deshboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './interceptors/axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

