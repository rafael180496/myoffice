import React, { Component } from "react";
import { AppSer } from "../service/funciones";
import { ConstApp } from "../service/constantes";

const CardService = props => {
  const {datacard}=props
  return (
    <div className="col-md-4">
      <img src={datacard.Img} alt={datacard.alt} className="ImgCircle"></img>
      <h4 className="service-heading">{datacard.titulo}</h4>
      <p className="text-muted">{datacard.Descripcion}</p>
    </div>
  );
};

class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb(false);
  }
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Servicios</h2>
              <h3 className="section-subheading text-muted">
                Nosotros ofrecemos diferentes servicios.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            {ConstApp.Servicios.map((item,i) => {
              return <CardService datacard={item} key={i+"id"}></CardService>;
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default ServicePage;
