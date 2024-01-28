import React from "react";
import Etiqueta from "../Componentes/Etiqueta";

export default class LaEvolucion extends React.Component{

    render() {
        return(
            <>
              <Etiqueta 
           nombre="La Evolución" 
           img="/img/evolution1.webp"
           descripcion="Al crearse nuestro planeta solo había volcanes y constantemente caían meteoritos, lo cual era bueno porque los volcanes ayudaban a establecer mejor el suelo, y al favorecer la creación del agua se hizo la atmosfera ayudando a que tuvieramos la gravedad y así se hicieron las nubes. Todo estuvo en condiciones para la vida. Y surgieron los primeros microbios que se fueron convirtiendo en diferentes especies de animales como peces, ranas y tiburones, y esto ocurrio tanto en el agua como en la superficie terrestre, de esta manera se fueron creando tambien diversos tipos de animales en la tierra tales como iguanas, lagartos, monos.etc, y este ultimo; del mono, descendieron los humanos." />
             </>
        )
    }
}
            