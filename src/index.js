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
  base: "#a04ed9",
  danger: "tomato",
  gradient: `background-color: #08AEEA;
background-image: linear-gradient(243deg, #08AEEA 0%, #2AF598 100%);`
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
