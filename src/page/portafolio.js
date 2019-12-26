import React, { Component, Fragment } from "react";
import { AppSer } from "../service/funciones";
import { ConstApp } from "../service/constantes";

const CardContent = props => {
  const { card } = props;
  const hrefid = `#${card.alt}`;
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <a className="portfolio-link" data-toggle="modal" href={hrefid}>
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={card.img} alt={card.alt}></img>
      </a>
      <div className="portfolio-caption">
        <h4>{card.titulo}</h4>
      </div>
    </div>
  );
};
const CardModal = props => {
  const { card } = props;
  const hrefid = `${card.alt}`;
  return (
    <div
      className="portfolio-modal modal fade"
      id={hrefid}
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-uppercase">{card.titulo}</h2>

                <img className="img-fluid" src={card.img} alt={card.alt}></img>
                <p>
                  {card.descripcion}
                </p>
                <button
                  className="btn btn-primary"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-times"></i>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
class PortPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AppSer.NavCamb(false);
  }
  render() {
    return (
      <Fragment>
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Muesta de Minerales
                </h2>
                <h3 className="section-subheading text-muted">
                  Estos son algunos de nuestro minerales extraido sin procesar.
                </h3>
              </div>
            </div>
            <div className="row">
              {ConstApp.Muestra.map((item, i) => {
                return (
                  <CardContent card={item} key={i + "idport"}></CardContent>
                );
              })}
            </div>
          </div>
        </section>
        {ConstApp.Muestra.map((item, i) => {
                return (
                  <CardModal card={item} key={i + "idmodal"}></CardModal>
                );
              })}
      </Fragment>
    );
  }
}
export default PortPage;
