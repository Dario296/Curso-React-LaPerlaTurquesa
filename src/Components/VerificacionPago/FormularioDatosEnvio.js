import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, {Fragment, useState} from 'react'
import { UseContext } from '../../Configuraciones/Context';
import app from '../../Configuraciones/Firebase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const db = getFirestore(app)

const FormularioDatosEnvio = () => {
    const { Carrito, Total, terminarCompraConSwal} = UseContext()
    const[ datos, setDatos ] = useState({ 
        Nombre: "", 
        Apellido: "", 
        Direccion1: "", 
        Telefono: "", 
        Ciudad: "", 
        Provincia: "" 
    })
    const cambioImput = (event) =>{setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })}

    const ConfirmaCompra = async (e) =>{
        e.preventDefault()
    
        const orden = {
          Comprador: datos,
          Items: Carrito,
          Total: Total()
        }
    
        const ordenesRef = collection(db, 'ordenes')
        addDoc(ordenesRef, orden)
          .then((doc) => {
            terminarCompraConSwal(doc.id)
          })
    }
    
    return (
        <Fragment>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>    
                        <input onChange={cambioImput} required type="text" placeholder='Nombre*' name="Nombre" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required type="text" placeholder='Apellido*' name="Apellido" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required type="text" placeholder='Direccion 1*' name="Direccion1" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required type="number" placeholder='Telefono*' name="Telefono" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required type="text" placeholder='Ciudad*' name="Ciudad" className="form-control"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <input onChange={cambioImput} required type="text" placeholder='Estado/Provincia/Region*' name="Provincia" className="form-control"/>
                    </Grid>
                </Grid>
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
                    <Button component={Link} to="/Carrito">Atras</Button>
                    {datos.Nombre === "" || datos.Apellido === "" || datos.Direccion1 === "" || datos.Telefono === "" || datos.Ciudad === "" || datos.Provincia === "" ? <></> : <Button variant='contained' type='submit' onClick={ConfirmaCompra}>Realizar Pedido</Button>}
                </div>
            </form>
        </Fragment>
    )
}

export default FormularioDatosEnvio