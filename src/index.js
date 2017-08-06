import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider, injectGlobal } from "styled-components";

injectGlobal`
  body {
    margin: 0;
    padding: 2rem;
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

const theme = {
  primary: "#a04ed9"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
