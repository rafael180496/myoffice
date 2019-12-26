import React, { Component } from "react";
import { AppSer } from "../service/constantes";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb()
  }
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Bienvenido a MineralNic!</div>
            <div className="intro-heading text-uppercase">
              Minerales Nicaragua
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
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
