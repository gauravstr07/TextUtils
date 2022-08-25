import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const foot = ReactDOM.createRoot(document.getElementById("root"));
foot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
