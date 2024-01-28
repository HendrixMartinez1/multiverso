import React from "react";
import Etiqueta from "../Componentes/Etiqueta";

export default class Exoplanetas extends React.Component{

    render() {
        return(
            <>
              <Etiqueta 
           nombre="Exoplanetas" 
           img="/img/exoplaneta1.jpg"
           descripcion="Un exoplaneta es un planeta normal, común y corriente, solo que no está dentro de nuestro sistema solar, puede tener uno o mas soles, por ejemplo hay un exoplaneta que tiene tres soles, pero no creas que no puede albergar vida por ser exoplaneta, porque de hecho, hay muchos exoplanetas que podrian albergar vida, solo que encontrar alguno suficientemente y totalmente apto para albergar vida es difícil ya que la mayoria posee condiciones desfavorables, lo normal es que un lado del exoplaneta reciba todo el sol y el lado contrario esté todo a oscuras y solo el crepúsculo que está entre los dos lados podría tener vida."/>
            </>
        )
    }
}      

            