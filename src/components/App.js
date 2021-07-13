import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ConfigRoom from "../pages/ConfigRoom";
import { TestingApi } from "./TestingApi.js";
import RedirectFromApi from "./RedirectFromApi.js";
import Room from "./Room";

import GlobalStyle from "../styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/flowskip/" component={Home} />
        <Route exact path="/flowskip/test-api" component={TestingApi} />
        <Route exact path="/flowskip/config-room" component={ConfigRoom} />
        <Route
          exact
          path="/flowskip/redirect-from-api"
          component={RedirectFromApi}
        />
        <Route exact path="/flowskip/room/:room_code" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}
