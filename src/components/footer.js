import React, { Component } from "react";
import { ConstApp } from "../service/constantes";
import { AppSer } from "../service/funciones";
class FooterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const year =AppSer.YearAct()
    const name =ConstApp.AppName
    const telefono =`https://wa.me/${ConstApp.Contacto.Telefono}`
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; {name} {year}  </span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href={telefono}>
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}
export default FooterComp;
