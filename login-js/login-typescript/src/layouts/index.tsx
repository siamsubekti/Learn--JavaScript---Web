// @ts-ignore
import React, {FC, ReactElement, Fragment} from "react";
import {CssBaseline, ThemeProvider, createMuiTheme, } from "@material-ui/core";
import {deepOrange} from "@material-ui/core/colors";
// @ts-ignore
import Modules from "../modules";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: deepOrange,
  },
});

const Body: FC = (): ReactElement => {
  return (
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Modules />
        </ThemeProvider>
      </Fragment>
  );
};

export default Body;
