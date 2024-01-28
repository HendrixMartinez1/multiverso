import React from 'react';

 export default class Contacto extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }

    submitted(event) {
        alert("Se envió el formulario de " + this.state.nombre);
        event.preventDefault();
    }

    changed(event) {
        this.setState({
           nombre: event.target.value
        })
    }
    
    render() {
       return(
        <>
        <h2 className='loren'>Si te gustan nuestras historias, dejanos tu opinión y pronto te contactaremos!</h2>
        <form onSubmit={this.submitted}>
            <div className="form-group my-4">
                 <label className='loren'>Nombre:</label>
                 <input type="text" className="form-control" onChange={this.changed} />
            </div>
            <div className="form-group my-2">
                 <label className='loren'>Mensaje:</label>
                 <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Enviar</button>
        </form>
          </>
        )
    }
}
              
          