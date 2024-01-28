import React from "react";
import Etiqueta from "../Componentes/Etiqueta";

export default class EstrellasyAgujeros extends React.Component{

    render() {
        return(
            <>
              <Etiqueta
           nombre="Estrellas y Agujeros" 
           img="/img/img2.1.jpg"
           descripcion= "Cuando una estrella nace hay una explosion, las estrellas pueden ser de estos distintos colores: rojo, rosado, azul,amarillo o blanco y nunca hay una forma distinta, siempre la forma es redonda, pero cuando una estrella explota esto es provocado cuando a la estrella se le acaba su combustible, en este caso su materia se encoje al tamaño de su nucleo. Solo queda un disco negro, y esa forma circular y plana llamada agujero negro absorbe estrellas o cualquier otra cosa y funciona haciendolo así; primero el agujero rota alrededor de la estrella (u otra cosa) luego absorbe su materia hasta que no queda nada y a veces incluso absorbe su propia luz, la cual queda alrededor de él y la va absorbiendo hasta desaparecer." />
            </>
            
        )
    }
}