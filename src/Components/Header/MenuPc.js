import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./img/logo.png"

const MenuPc = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <img className='Logo' src={Logo} alt="Turquesa" />
            <Button>
                <Link className='Links' to="/">Inicio</Link>
            </Button>
            <Button>
                <Link className='Links' to="/Tienda">Tienda</Link>
            </Button>
            <Button>
                <Link className='Links' to="/TusDudas">Tus Dudas</Link>
            </Button>
            <Button>
                <Link className='Links' to="/Contacto">Contacto</Link>
            </Button>
        </Box>
    )
}

export default MenuPc