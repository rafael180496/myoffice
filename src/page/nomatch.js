import React, { Component } from "react";
import { AppSer } from "../service/funciones";

class NotMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: 404
    };
  }

  componentDidMount() {
    AppSer.NavCamb(false)
    let cod = this.props.match.params.cod;
    if (cod === undefined) {
      cod = 404;
    }
    this.setState({
      codigo: cod
    });
  }

  render() {
    const { codigo } = this.state;
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="section-heading text-uppercase">
                Lo sentimos error {codigo}
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default NotMatch;
