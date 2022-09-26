import React, { useState } from 'react'

const FormularioContacto = () => {
    const[ datos, setDatos ] = useState({ 
        Nombre: "", 
        Correo: "", 
        Mensaje: "", 
    })
    const cambioImput = (event) =>{setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })}

    const enviar = async (e) =>{
        e.preventDefault()
    
    }
    return (
        <form onSubmit={enviar} className="form-control contactForm">
            <div className="form-group">
                <input onChange={cambioImput} name="Nombre" type="text" className="form-control" placeholder="Nombre*"/>
            </div>
            <div className="form-group">
                <input onChange={cambioImput} name="Correo" type="email" className="form-control" placeholder="Correo*"/>
            </div>
            <div className="form-group">
                <textarea onChange={cambioImput} name="Mensaje" className="form-control" cols="30" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <div className="form-group enviar-contacto">
                <input type="submit" value="Enviar mensaje" className="btn btn-primary"/>
            </div>
        </form>
    )
}

export default FormularioContacto