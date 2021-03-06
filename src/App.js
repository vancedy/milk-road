import React, { useState, useEffect } from "react";
// import Header from "./static/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Landing from "./pages/Landing";
import Product from "./pages/Product";

// import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/product/:name" render={() => <Product name="cocoa" />} />

      </Switch>
    </BrowserRouter>
    // </ThemeProvider>
  );
}

export default App;
