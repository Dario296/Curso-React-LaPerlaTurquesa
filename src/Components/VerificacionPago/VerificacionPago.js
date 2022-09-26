import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormularioDatosEnvio from './FormularioDatosEnvio';
import { Navigate } from 'react-router-dom';
import { UseContext } from '../../Configuraciones/Context';

const theme = createTheme();

const VerificacionPago = () => {
  const { Carrito } = UseContext()
  if (Carrito.length === 0) {
    return <Navigate to="/Tienda"/>
  }

  return (
    <div className="contenedor">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <FormularioDatosEnvio/>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default VerificacionPago