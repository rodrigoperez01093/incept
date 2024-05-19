import React from 'react'
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import App from "./App.tsx";
import "babel-polyfill";
import "react-app-polyfill/ie11";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.unregister();