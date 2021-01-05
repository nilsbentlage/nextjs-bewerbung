import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

let theme = createMuiTheme({
  spacing: 10,
  palette: {
    type: "dark",
    primary: indigo,
    secondary: {
      main: "#aeea00",
    },
  },
  typography: {
    h5: {
      marginTop: "1rem",
      marginBottom: ".5rem",
      borderBottom: "1px solid rgba(255,255,255,0.5)"
    }
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
