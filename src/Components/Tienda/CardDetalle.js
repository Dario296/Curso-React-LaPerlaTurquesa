import { Box, Button, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';

export default function CardDetalle({ Productos, Comprar, Restar, Sumar, EstaEnCarrito, Cantidad }) {
    
    return (
        <div className='CardDetalle'>
            <div className='mx-3'>
                <Typography variant='h4' className='TituloPro'>{Productos.Nombre}</Typography>
                <img src={Productos.Imagen} alt={Productos.Nombre} className="img-fluid imgProductos"/>
            </div>
            <div className='mx-3'>
                <Typography variant='h4'>Precio: ${Productos.Precio}</Typography>
                <Typography variant="h5" >{Productos.Descripcion}</Typography>
                <Typography variant="h5" >Stock: {Productos.Stock}</Typography>
                <Box className="Contador">
                    {EstaEnCarrito(Productos.Id)
                        ?   <>
                                <Button variant="contained"><Link className='BtnCarrito' to="/Tienda">Seguir Comprando</Link></Button>
                                <Button  className='mx-1' variant="contained"><Link className='BtnCarrito' to="/Carrito">Terminar compra</Link></Button>
                            </>
                        :   
                        <>
                            <Box className='Cantidad' sx={{ display: 'flex', alignItems: 'center'}}>
                                <Button color="error" onClick={Restar}><RemoveIcon/></Button>
                                <Typography>{Cantidad}</Typography>
                                <Button onClick={Sumar}><AddIcon/></Button>
                            </Box>
                            <Divider/>
                            <Button variant="contained" onClick={Comprar} >Añadir al Carrito</Button>
                        </>
                    }
                </Box>
            </div>
        </div>
    );
}