import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from "react-jss";

import whiteTheme from "./theme.white";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Container from "./Container";
import Grid from "./Grid";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={whiteTheme}>
          <Container>
              <Grid container>
                  <Grid item>
                      <h2>Weight</h2>
                      <Button fixedWidth weight="small">small</Button>
                      <Button fixedWidth weight="default">default</Button>
                      <Button fixedWidth={180} weight="big">big with long text</Button>
                  </Grid>
                  <Grid item>
                      <h2>Color</h2>
                      <Button color="primary">primary</Button>
                      <Button color="default">default</Button>
                      <Button color="secondary">secondary</Button>
                  </Grid>
                  <Grid item>
                      <h2>Variant</h2>
                      <Button variant="outlined">outlined</Button>
                      <Button variant="default">default</Button>
                      <Button variant="text">text</Button>
                  </Grid>
              </Grid>
              <Grid container>
                  <Grid item>
                      <ButtonGroup>
                          <Button color="primary" variant="default" disabled>test 3</Button>
                          <Button color="default" variant="default" disabled>test 2</Button>
                          <Button color="secondary" variant="default" disabled>test 1</Button>
                      </ButtonGroup>
                  </Grid>
                  <Grid item>
                      <ButtonGroup>
                          <Button color="primary" variant="outlined" disabled>test 3</Button>
                          <Button color="default" variant="outlined" disabled>test 2</Button>
                          <Button color="secondary" variant="outlined" disabled>test 1</Button>
                      </ButtonGroup>
                  </Grid>
                  <Grid item>
                      <ButtonGroup>
                          <Button color="primary" variant="text" disabled>test 3</Button>
                          <Button color="default" variant="text" disabled>test 2</Button>
                          <Button color="secondary" variant="text" disabled>test 1</Button>
                      </ButtonGroup>
                  </Grid>
              </Grid>

              <Grid container>
                  <Grid item xs={12}>test-1</Grid>
                  <Grid item xs={12} md={6}>test-2</Grid>
                  <Grid item xs={12} md={6}>test-3</Grid>
                  <Grid item>test-4</Grid>
              </Grid>
          </Container>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
