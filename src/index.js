import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FontStyles from "./fonts/font";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
);
