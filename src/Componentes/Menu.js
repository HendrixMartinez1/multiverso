 import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{

    render() {
        return(
            <div className="row bg-light fixed-top py-2 px-4">
                <div className="col-12 d-flex align-items-center">
                   <h1 className="f3">EL MULTIVERSO</h1>
                   <Link to="/" className="mx-3 colormenu"> Inicio</Link>
                   <Link to="/Estrellas" className="mx-3 colormenu"> Estrellas y Agujeros</Link>
                   <Link to="/Evolucion" className="mx-3 colormenu"> Evolución</Link>
                   <Link to="/Magnetares" className="mx-3 colormenu"> Magnetares</Link>
                   <Link to="/Exoplanetas" className="mx-3 colormenu "> Exoplanetas</Link>
                   <Link to="/Pulsares" className="mx-3 colormenu"> Púlsares</Link>
                   <Link to="/Contacto" className="mx-3 colormenu">Contacto</Link>
                </div>
            </div>
        )
    }
}
            
 
 