import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from "react-jss";

import whiteTheme from "./theme.white";

import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={whiteTheme}>
          {/*<div>*/}
          {/*    <h2>Weight</h2>*/}
          {/*    <div><Button fixedWidth weight="small">small</Button></div><br/>*/}
          {/*    <div><Button fixedWidth weight="default">default</Button></div><br/>*/}
          {/*    <div><Button fixedWidth={180} weight="big">big with long text</Button></div><br/>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <h2>Color</h2>*/}
          {/*    <div><Button color="primary">primary</Button></div><br/>*/}
          {/*    <div><Button color="default">default</Button></div><br/>*/}
          {/*    <div><Button color="secondary">secondary</Button></div><br/>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <h2>Variant</h2>*/}
          {/*    <div></div><br/>*/}
          {/*    <div></div><br/>*/}
          {/*    <div></div><br/>*/}
          {/*</div>*/}

          {/*<div>*/}
          {/*    <ButtonGroup>*/}
          {/*        <Button color="primary" variant="default" disabled>test 3</Button>*/}
          {/*        <Button color="default" variant="default" disabled>test 2</Button>*/}
          {/*        <Button color="secondary" variant="default" disabled>test 1</Button>*/}
          {/*    </ButtonGroup>*/}
          {/*    <br/>*/}
          {/*    <ButtonGroup>*/}
          {/*        <Button color="primary" variant="outlined" disabled>test 3</Button>*/}
          {/*        <Button color="default" variant="outlined" disabled>test 2</Button>*/}
          {/*        <Button color="secondary" variant="outlined" disabled>test 1</Button>*/}
          {/*    </ButtonGroup>*/}
          {/*    <br/>*/}
          {/*    <ButtonGroup>*/}
          {/*        <Button color="primary" variant="text" disabled>test 3</Button>*/}
          {/*        <Button color="default" variant="text" disabled>test 2</Button>*/}
          {/*        <Button color="secondary" variant="text" disabled>test 1</Button>*/}
          {/*    </ButtonGroup>*/}
          {/*</div>*/}

          <div>

          </div>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
