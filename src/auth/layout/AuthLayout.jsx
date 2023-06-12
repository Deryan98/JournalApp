import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({children, title = ''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      //tenemos acceso al tema que definimos con el themeprovider
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        //Tamanio de la caja
        xs={3}
        sx={{ width:{ sm: 450} , backgroundColor: "white", p: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
