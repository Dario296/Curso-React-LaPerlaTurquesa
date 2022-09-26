import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import NavBarTurquesa from "./Components/Header/NavBarTurquesa";
import Inicio from "./Components/Inicio/Inicio";
import ConteCardDetalle from "./Components/Tienda/ConteCardDetalle";
import Tienda from "./Components/Tienda/Tienda";
import TusDudas from "./Components/TusDudas/TusDudas";
import IniciarSesion from "./Components/Usuario/IniciarSesion/IniciarSesion";
import VerificacionPago from "./Components/VerificacionPago/VerificacionPago";
import { Provider } from "./Configuraciones/Context";

function App() {
  return (
    <Provider>
        <BrowserRouter>
          <NavBarTurquesa/>
          <Routes>
            <Route index element={<Inicio/>}/>
            <Route path="Tienda" element={<Tienda/>}/>
            <Route path="Tienda/:Categoria" element={<Tienda/>}/>
            <Route path="/Tienda/Item/:Id" element={<ConteCardDetalle/>}/>
            <Route path="TusDudas" element={<TusDudas/>}/>
            <Route path="Contacto" element={<Contacto/>}/>
            <Route path="Carrito" element={<Carrito/>}/>
            <Route path="VerificacionPago" element={<VerificacionPago/>}/>
            <Route path="IniciarSesion" element={<IniciarSesion/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        
    </Provider>
  );
}

export default App;