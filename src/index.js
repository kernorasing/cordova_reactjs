import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Layout from './layout/Layout';
import * as serviceWorker from "./serviceWorker";

const renderReactDOM = () =>
  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Layout />
    </React.StrictMode>,
    document.getElementById("root")
  );

if (window.cordova) {
  document.addEventListener("deviceready", () => {
    renderReactDOM();
    console.log("ondeviceready");
  });
} else {
  renderReactDOM();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
