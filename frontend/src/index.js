import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorB";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        {/* <MuiThemeProvider> */}
        <App />

        {/* </MuiThemeProvider> */}
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
