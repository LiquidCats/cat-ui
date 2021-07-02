import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from "react-jss";

import whiteTheme from "./theme.white";
import Gallery from "./Gallery.component";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={whiteTheme}>
          <Gallery/>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
