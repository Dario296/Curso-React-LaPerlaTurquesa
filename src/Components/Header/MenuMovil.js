import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import Logo from "./img/logo.png"
import { Link } from 'react-router-dom';

const MenuMovil = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu}>
                <MenuIcon className='Links' />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted onClose={handleCloseNavMenu}
                transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} sx={{ display: { xs: 'block', md: 'none' }, }}>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Button>
                        <Link className='Links1' to="/">Inicio</Link>
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Button>
                        <Link className='Links1' to="/Tienda">Tienda</Link>
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Button>
                        <Link className='Links1' to="/TusDudas">Tus Dudas</Link>
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Button>
                        <Link className='Links1' to="/Contacto">Contacto</Link>
                    </Button>
                </MenuItem>
            </Menu>
            <img className='Logo' src={Logo} alt="Turquesa" />
        </Box>
    )
}

export default MenuMovil