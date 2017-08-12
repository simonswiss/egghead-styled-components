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
  crazy: `background-color: #00DBDE;
background-image: linear-gradient(225deg, #00DBDE 0%, #FC00FF 100%);
`
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
