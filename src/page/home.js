import React, { Component } from "react";
import { AppSer } from "../service/funciones";
import { ConstApp } from "../service/constantes";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb();
  }
  render() {
    const {AppName,AppNameLength } = ConstApp;
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Bienvenido a {AppName}!</div>
            <div className="intro-heading text-uppercase">
              {AppNameLength}
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#/servicios"
            >
              Dime más
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default HomePage;
