import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./global.styles";

const container = document.getElementById("root");
const root = createRoot(container!);
axios.defaults.baseURL = "https://randomuser.me/";

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);