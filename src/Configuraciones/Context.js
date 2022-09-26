import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'

export const Context = createContext()

export const Provider = ({children}) => {

    const [Carrito, setCarrito] = useState([])
    
    const EstaEnCarrito  = (Id) => {
      return Carrito.some((Producto) => Producto.Id === Id)
    }

    const Cantidad = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad, 0)
    }

    const AgregarCarrito = (Producto) => {
      setCarrito([...Carrito, Producto])
    }

    const EliminarProducto = (Id) => {
        setCarrito( Carrito.filter((Producto) => Producto.Id !== Id) )
    }
    
    const Total = () => {
        return Carrito.reduce((acc, Producto) => acc + Producto.Cantidad * Producto.Precio, 0)
    }

    const VaciarCarrito = () => {
        Swal.fire({
            title: '¿Esta seguro?',
            showDenyButton: true,
            confirmButtonText: 'Borrar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Borrado', '', 'success')
              setCarrito([])
            } else if (result.isDenied) {
              Swal.fire('Los cambios no se guardan', '', 'info')
            }
        })
    }

    const terminarCompraConSwal = (id) => {
        Swal.fire({
          title: 'Compra exitosa!',
          text: `Compra exitosa numero de orden: ${id}`,
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        })
        setCarrito([])
      }
    
    return (
        <Context.Provider value={{Carrito, EstaEnCarrito, Cantidad, AgregarCarrito, EliminarProducto, Total, VaciarCarrito, terminarCompraConSwal}}>{children}</Context.Provider>
    )
}

export const UseContext = () => {
    return useContext(Context)
}