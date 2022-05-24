import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { KcApp, defaultKcProps, getKcContext } from "keycloakify";
/*
const { kcContext } = getKcContext();

if (kcContext === undefined) {
  throw new Error(
    "This app is a Keycloak theme" +
      "It isn't meant to be deployed outside of Keycloak"
  );
}
*/
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*
    <KcApp
      kcContext={kcContext}
      {...{
        ...defaultKcProps,
        kcHeaderWrapperClass: "my-class",
      }}
    />*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import { KcApp, defaultKcProps, getKcContext } from "keycloakify";
//We assume the file contains: ".my-class { color: red; }"
import "./index.css";

const { kcContext } = getKcContext();

if (kcContext === undefined) {
  throw new Error(
    "This app is a Keycloak theme" +
      "It isn't meant to be deployed outside of Keycloak"
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <h1>Peste</h1>
    {/*    <KcApp
      kcContext={kcContext}
      {...{
        ...defaultKcProps,
        kcHeaderWrapperClass: "my-class",
      }}
  </>
);

*/
