import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function MenuCategorias() {

  return (
    <div className='MenuCategorias'>
      <NavDropdown drop='end' className='Menu' title="Categorias" >
        <NavDropdown.Item><Link className='Links1' to='/Tienda/Cristal de Roca'>Cristal de Roca</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Links1' to='/Tienda/Madera'>Madera</Link></NavDropdown.Item>
        <NavDropdown.Item><Link className='Links1' to='/Tienda/Mostacilla'>Mostacilla</Link></NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default MenuCategorias;