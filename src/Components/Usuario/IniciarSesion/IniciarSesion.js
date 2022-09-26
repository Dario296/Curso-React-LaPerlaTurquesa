import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import app from '../../../Configuraciones/Firebase';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const Facebook = new FacebookAuthProvider();
const Google = new GoogleAuthProvider();

const IniciarSesion = () => {
  const navigate = useNavigate();
  const iniciarFacebook = (e) =>{
    e.preventDefault();
    signInWithPopup(auth, Facebook)
      .then(() => {
        navigate("/Tienda");
      })
      .catch((err) =>{
        console.log(err);
      })
  }
  const iniciarGoogle = (e) =>{
      e.preventDefault();
      signInWithPopup(auth, Google)
        .then(() => {
          navigate("/Tienda");
        })
        .catch((err) =>{
          console.log(err);
        })
  }
  return (
    <Container component="main" maxWidth="xs">
      <Button onClick={iniciarFacebook} fullWidth variant="contained" sx={{ mt: 15, mb: 2 }}>Iniciar Con Facebook</Button>
      <Button onClick={iniciarGoogle} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Iniciar Con Google</Button>
    </Container>
  );
}

export default IniciarSesion