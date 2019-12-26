import React, { Component } from "react";
import { AppSer } from "../service/funciones";
import { ConstApp } from "../service/constantes";
class TeamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb(false);
  }
  render() {
    const telefono = `https://wa.me/${ConstApp.Contacto.Telefono}`;
    const { Img, Nombre, Cargo,Correo} = ConstApp.Contacto;
    return (
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Algunos de nuestro equipo:
              </h2>
              <h3 className="section-subheading text-muted">
                cada trabajador esta totalmente capacitado con mas de 3 años de
                experiencia.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Img} alt="miguel" />
                <h4>{Nombre}</h4>
                <p className="text-muted">{Cargo}</p>
                <p className="text-muted">{Correo}</p>
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
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Somos una empresa confiable,honesta y responsable. Brindando
                siempre el mejor producto.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TeamPage;
