import React, { Component } from "react";
import mineral from "../img/mineral.png";
class HeaderCompt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titulo } = this.props;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#/">
            <img src={mineral} alt="Malaquita" width="35" height="30" />
            {" " + titulo}
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/servicios">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/equipo">
                  Equipo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/portafolio">
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/acerca">
                  Acerca de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default HeaderCompt;
