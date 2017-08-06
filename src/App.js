import React, { Component } from "react";

import Button from "./components/Button";
import Quote from "./components/Quote";
import Notice from "./components/Notice";

/* ============================== */
/* ===== the main component ===== */
/* ============================== */
const App = () =>
  <div>
    <Button>Hey, click me!</Button>
    <Notice>
      Just letting you know... We think you're awesome and we're super happy to
      have you as a customer!
    </Notice>
    <Quote>Wooooaa, this is sooo so cool my friends!!</Quote>
  </div>;

export default App;
