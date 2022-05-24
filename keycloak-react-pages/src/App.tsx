import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { KcApp, defaultKcProps, getKcContext } from "keycloakify";

function App() {
  const { kcContext } = getKcContext({
    mockPageId: "login.ftl",
  });

  if (kcContext === undefined) {
    throw new Error(
      "This app is a Keycloak theme" +
        "It isn't meant to be deployed outside of Keycloak"
    );
  }
  return (
    <div className="App">
      <KcApp
        kcContext={kcContext}
        {...{
          ...defaultKcProps,
          kcHeaderWrapperClass: "my-class",
        }}
      />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
