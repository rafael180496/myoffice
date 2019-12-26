import React from "react";
import "./App.css";
import "./css/agency.css"
import "./css/fontawesome-free/css/all.min.css"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotMatch from "./page/nomatch";
import { ROUTERS_APP } from "./service/router";
import HeaderCompt from "./components/nav";
import { AppSer } from "./service/constantes";

function App() {
  return (
    <Router>
      <HeaderCompt titulo={AppSer.AppName} ></HeaderCompt>
      <Switch>
        {ROUTERS_APP.map(rut => {
          return (
            <Route
              key={"rut" + rut.pos}
              exact
              path={rut.path}
              component={rut.component}
            />
          );
        })}
        <Route component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default App;
