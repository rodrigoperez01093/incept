import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import "babel-polyfill";
import "react-app-polyfill/ie11";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)