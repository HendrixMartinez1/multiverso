import React from "react";
import './Etiqueta.css';

export default class Etiqueta extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="row my-4">
            <div className="col-12 d-flex align-items-center">
                <img src={this.props.img} alt={this.props.nombre} className="imagen-type"/>
                <div className="px-4">
               <h2 className="loren">{this.props.nombre}</h2>
               <h5><p className="f2">{this.props.descripcion}</p></h5>
               </div>
            </div>
        </div>
    )
  }
}