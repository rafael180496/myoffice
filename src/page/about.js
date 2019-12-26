import React, { Component } from "react";
import { AppSer } from "../service/funciones";
import gem from "../img/slot-machine.png";
import ore from "../img/ore.png";
import crystal from "../img/crystal.png";
class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb(false);
  }
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Acerca De:</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      src={gem}
                      className="rounded-circle img-fluid"
                      alt="gem"
                    ></img>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading">Minerales Nicaragua</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        Somos una empresa de compra y venta de piedras preciosa
                        en Nicaragua y parte de Centro America. Procesamos las
                        piedras preciosa puliendolas y moldeando en formas de
                        cualquier estilo de preferencia del cliente, asi como el envio de las piedras puras sin
                        procesar.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      src={ore}
                      className="rounded-circle img-fluid"
                      alt="ore"
                    ></img>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-body">
                      <p className="text-muted">
                        Hemos extraido en minas de San Juan Rio Coco,
                        Siuna,Bonanza y mucho mas. Hacemos estudio de campo en
                        zonas de potencial extraccion certificando su calidad atravez de un estudio completo ala piedra preciosa.
                        Con mas de 5 años de experiencia, ofreciendo nuestros servicio
                        a clientes extranjeros y locales.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <a href="#/">
                      <img
                        src={crystal}
                        className="rounded-circle img-fluid"
                        alt="crystal"
                      ></img>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutPage;
