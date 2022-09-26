import "./Contacto.scss"
import FormularioContacto from "./FormularioContacto"

const Contacto = () => {
    return (
      <div className="contenedor">
		    <div className="container">
		    	<div className="row no-gutters">
		    		<div className="col-lg-6">
		    			<div className="contact-wrap w-100 p-md-5 p-4">
		    				<p className="mb-4">Estamos abiertos a cualquier sugerencia o simplemente para tener una charla.</p>
		    				<div className="row mb-4">
		    					<div className="col-md-4">
		    						<div className="dbox w-100 d-flex align-items-start">
		    							<p><span>Dirección:</span><a className='direccion' href="https://goo.gl/maps/aJ4sACFVVc2sskX18">Entre Ríos 242, Córdoba</a></p>
		    						</div>
		    					</div>
		    					<div className="col-md-5">
		    						<div className="dbox w-100 d-flex align-items-start">
		    							<p><span>Correo:</span> <a href="mailto:info@yoursite.com" className='direccion'>laperlaturquesa@test.com</a></p>
		    						</div>
		    					</div>
		    					<div className="col-md-3">
		    						<div className="dbox w-100 d-flex align-items-start">
		    							<p><span>Teléfono:</span> <a href="https://wa.me/5493515092248" className='direccion'>3515092248</a></p>
		    						</div>
		    					</div>
		    				</div>
		    				<FormularioContacto/>
		    				<div className="w-100 social-media mt-4">
		    					<h3 className='seguinos'>Seguinos en nuestras Redes</h3>
		    					<p className='redes'>
		    						<a className='redes1' href="https://www.facebook.com/La-Perla-Turquesa-101870438262371/">Facebook</a>
		    						<a className='redes1' href="https://vm.tiktok.com/ZMdGCkWjv/">TickTock</a>
		    						<a className='redes1' href="https://instagram.com/laperlaturquesa?igshid=YmMyMTA2M2Y=">Instagram</a>
		    					</p>
		    				</div>
		    			</div>
		    		</div>
		    		<div className="col-lg-6 d-flex align-items-stretch">
		    			{/* <div className="info-wrap w-100 p-5 img" style="background-image: url(images/img.jpg);"></div> */}
		    		</div>
		    	</div>
		    </div>
      </div>
    )
}

export default Contacto