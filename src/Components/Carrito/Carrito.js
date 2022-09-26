import { Button } from "@mui/material"
import { Link, Navigate } from "react-router-dom"
import { UseContext } from "../../Configuraciones/Context"


const Carrito = () => {

  const { Carrito, Total, VaciarCarrito, EliminarProducto, Cantidad } = UseContext()

  if (Carrito.length === 0) {
    return <Navigate to="/Tienda"/>
  }

  return (
    <div className="container my-5">
      <h2>Tu carrito</h2>
      <hr/>
      { Carrito.map((Productos) => (
        <div key={Productos.Id}>
          <h3>{Productos.Nombre}</h3>
          <p>Precio: ${Productos.Precio}</p>
          <p>Cantidad: {Productos.Cantidad}</p>
          <Button onClick={() => EliminarProducto(Productos.Id)} variant="contained" color="error" >Eliminar</Button>
          <hr/>
        </div>
      ))}
      <>
        <h4>Total productos: {Cantidad()}</h4>
        <h4>Total: ${Total()}</h4>
        <Button variant="contained" color="error" onClick={VaciarCarrito}>Vaciar carrito</Button>
        <Button className="mx-3" variant="contained"><Link className="Links2" to="/VerificacionPago">Pedir Pagar</Link></Button>
      </>
    </div>
  )
}

export default Carrito