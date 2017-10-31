import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { injectGlobal } from "styled-components";
import configureStore from "./store/configure";
import AppContainer from "./containers/app";

// we have to inject the global styles _somewhere_ :)
injectGlobal`
  body { background: #303030; color: #f0f0f0; }
`;

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
