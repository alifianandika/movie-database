import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import Browser Router dari React Router
import { HashRouter } from "react-router-dom";
//gh-pages ubah BrowserRouter menjadi HashRouter
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <React.StrictMode>
    {/*
     * Bungkus/Hubungkan Aplikasi dengan Browser Router.
     * Agar URL browser dapat dimanipulasi oleh React Router
     */}
    
    
    
     <Provider store={store}>
     <HashRouter>
      <App />
    </HashRouter>
     </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
