import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"
import { ShoppingCartCheckout } from '@mui/icons-material';
import { UseContext } from '../../Configuraciones/Context';
import IniciarSalir from './IniciarSalir';
import MenuPc from './MenuPc';
import MenuMovil from './MenuMovil';
import { AppBar, Badge, Button, Container, Toolbar } from '@mui/material';



const NavBarTurquesa = () => {
    
  const { Cantidad, Carrito } = UseContext()

  return (
    <AppBar className='Nav-Bar' position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuMovil/>
          <MenuPc/>
          <Button as={Link} to="/Carrito" className={Carrito.length === 0? "IconoCarrito" : ""}>
            <Badge badgeContent={Cantidad()} color="primary">
              <ShoppingCartCheckout className='Links'/>
            </Badge>
          </Button>
          <IniciarSalir/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBarTurquesa;