import React from "react";
import Etiqueta from "../Componentes/Etiqueta";

export default class Magnetares extends React.Component{

    render() {
        return(
            <>
              <Etiqueta 
           nombre="Magnetares" 
           img="/img/magnetar1.jpg"
           descripcion="Un magnetar es una estrella de neutrones que contiene un campo magnético extremadamente fuerte, expulsando en breves periodos de tiempo descomunales cantidades de energía en forma de rayos-x o rayos gamma. El magnetar es una especie exótica de estrella de neutrones y por lo tanto comparte una naturaleza similar al púlsar, pero se diferencia de éste porque emite un desproporcionado campo magnético, es mucho mas nocivo que un púlsar pero tiene un tamaño reducido de 20 kilometros y se les considera como los imanes mas potentes conocidos en el universo."/>
            </>
        )
    }
}      



            