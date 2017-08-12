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
  gradient: `background-color: #FAD961;background-image: linear-gradient(270deg, #7308EF 0%, #7308EF 35%, #954AEB 65%, #954AEB 99%);`
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
