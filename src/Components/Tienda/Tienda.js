import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardTienda from './CardTienda'
import MenuCategorias from './MenuCategorias'
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import app from '../../Configuraciones/Firebase'
import "./Tienda.scss"

const db = getFirestore(app)

const Tienda = () => {
  const [Productos, setProductos] = useState([])
  const { Categoria } = useParams()

  useEffect(()=>{
    const ProductosRef = collection(db, 'Listado Productos')
      const Respuesta = Categoria? query(ProductosRef, where('Categoria', '==', Categoria)) : query(ProductosRef)
      getDocs(Respuesta)
        .then((resp) => {
          const ProductosDB = resp.docs.map( (doc) => ({Id: doc.id, ...doc.data()}) )
          setProductos(ProductosDB)
        })
  },[Categoria])

  return (
    <div className='ContenedorTienda'>
      <MenuCategorias/>
      <div className="contenedor">
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="space-around" alignItems="center">
          { Productos.map((Productos) => <Grid item key={Productos.Id}><CardTienda Productos={Productos}/></Grid>) }
        </Grid>
      </div>
    </div>
    
  )
}

export default Tienda