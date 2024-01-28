import React from "react";
import Etiqueta from "../Componentes/Etiqueta";

export default class Pulsares extends React.Component{

    render() {
        return(
            <>
              <Etiqueta 
            nombre="Púlsares" 
            img="/img/pulsar1.jpg"
            descripcion="Un pulsar es el núcleo de una estrella que se explota en una supernova, se trata de una estrella extraordinariamente compacta que rota sobre sí misma a unos 70.000 km por segundo emitiendo radio-ondas, si pudieras ver de cerca un púlsar con tus propios ojos, su campo magnético te convertiría en cenizas, son los objetos más rapidos de todo el cosmos. El campo magnético de un púlsar es tan potente que puede llegar desde 100.000 Gaus hasta el millón de Gaus (Un Gaus es la manera como se mide el campo magnético)."/>
             </>
        )
    }
}      
            
