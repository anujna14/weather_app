import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import { SearchContextProvider } from "./Context/SearchContext";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
