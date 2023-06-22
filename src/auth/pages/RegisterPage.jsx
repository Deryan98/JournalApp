import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "didier@google.com",
  password: "123456",
  displayName: 'Didier Cruz'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,  
  } = useForm(formData, formValidations);
  const onSubmit = (event) => {
    event.preventDefault();
    if(!isFormValid) return
    // setFormSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              helperText={displayNameValid}
              error={!!displayNameValid && formSubmitted}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              helperText={emailValid}
              error={!!emailValid && formSubmitted}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              helperText={passwordValid}
              error={!!passwordValid && formSubmitted}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
            
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
