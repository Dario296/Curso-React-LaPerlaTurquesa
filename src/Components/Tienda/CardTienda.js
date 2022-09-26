import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function CardTienda({Productos}) {    

    return (
        <Card className='Card' sx={{ width: 280, height: 320}}>
            <Box sx={{display: 'flex', alignItems: 'center', margin:"10px"}}>
                <Typography flexGrow={1}>{Productos.Nombre}</Typography>
            </Box>
            <CardMedia component="img" height="194" image={Productos.Imagen} alt={Productos.Nombre}/>
            <Button className='VerMas' variant="contained"><Link className="Links2" to={`/Tienda/Item/${Productos.Id}`}>Detalles</Link></Button>
        </Card>
    );
}
