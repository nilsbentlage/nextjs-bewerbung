import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
  adaptV4Theme,
} from "@mui/material/styles";
import { orange, blue } from "@mui/material/colors";

let theme = createTheme(adaptV4Theme({
  spacing: 10,
  palette: {
    mode: "dark",
    primary: orange,
    secondary: blue,
  },
  typography: {
    h1: { color: "white" },
    h5: {
      marginTop: "1rem",
      marginBottom: ".5rem",
      borderBottom: "1px solid rgba(255,255,255,0.5)",
    },
  },
}));

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
