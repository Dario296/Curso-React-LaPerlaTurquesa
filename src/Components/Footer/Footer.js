import "./Footer.scss"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
const Footer = () => {
  return (
    <footer className="footer">
        <div>
            <ul className="cont-list-redes">
                <li className="list-redes">
                    <a href="https://wa.me/5493515092248" className="redes"><WhatsAppIcon/></a>
                </li>
                <li className="list-redes">
                    <a href="https://www.facebook.com/La-Perla-Turquesa-101870438262371/" className="redes"><FacebookIcon/></a>
                </li>
                <li className="list-redes">
                    <a href="https://vm.tiktok.com/ZMdGCkWjv/" className="redes"><MusicNoteRoundedIcon/></a>
                </li>
                <li className="list-redes">
                    <a href="https://instagram.com/laperlaturquesa?igshid=YmMyMTA2M2Y=" className="redes"><InstagramIcon/></a>
                </li>
            </ul>
        </div>
        <p className="derechos">La Perla Turquesa</p>
        <a href="https://dario296.github.io/DL-Technology/" className="derechos1">©DL Technology</a>
        <p className="derechos2">© Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer