import React,{ Component } from "react";
import { AppSer } from "../service/funciones";
class PortPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        AppSer.NavCamb(false);
    }
    render() { 
       return ( <p> hola </p>)
    }
}
export default PortPage;