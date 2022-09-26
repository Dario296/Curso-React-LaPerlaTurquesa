import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../../Configuraciones/Firebase'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import CardDetalle from './CardDetalle'
import { UseContext } from '../../Configuraciones/Context';

const db = getFirestore(app)

const ConteCardDetalle = () => {

    const [Productos, setProductos] = useState([])
    const {Id} = useParams()
    const { AgregarCarrito, EstaEnCarrito } = UseContext()
    const [Cantidad, setCantidad] = React.useState(1)

    useEffect(() => {
        const DocumentoRef = doc(db, "Listado Productos", Id)
        getDoc(DocumentoRef)
        .then((Docu)=>{
            setProductos({Id: Docu.id, ...Docu.data()})
        })
    },[Id])
    
    const Sumar = () => {
        if (Cantidad < Productos.Stock) {
            setCantidad(Cantidad +1)
        }   
    }

    const Restar = () => {
        if (Cantidad > 1 ) {
            setCantidad(Cantidad - 1)
        }
    }
    
    const Comprar = () => {
        if (Cantidad >=1) {
            const itemToCart = {
                Id: Productos.Id,
                Nombre: Productos.Nombre,
                Descripcion: Productos.Descripcion,
                Precio: Productos.Precio,
                Cantidad,
            }
            AgregarCarrito(itemToCart)
        }
    }

    return (
        <CardDetalle Productos={Productos} Comprar={Comprar} Restar={Restar} Sumar={Sumar} EstaEnCarrito={EstaEnCarrito} Cantidad={Cantidad}/>
    )
}

export default ConteCardDetalle