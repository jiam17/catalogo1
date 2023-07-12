/* eslint-disable react/prop-types */
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Imagen from "../assets/image/imagen.png";



export default function Navbar({ navLinks }) {
    //estado para mantener cerrado el button 
    const [open, setOpen] = useState(false)

    return (
        <>
        {/**imagen de fondo */}
            <div style={{ ...styles.backgroundImage }}>
                  <img src={Imagen} alt="" style={{ width: "100%", height: "100%" }} />
             </div>
            <AppBar position="static" className="navbar" sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Toolbar>
                    <IconButton
                        color="black"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className="navbar-title" sx={{ flexGrow: 1, fontFamily: 'Montserrat' }}>
                        <Link to="/" className="navLink">Coco4lunas</Link>
                    </Typography>
                    <Typography variant="h6" className="navbar-messaje" sx={{ flexGrow: 8, fontFamily: 'Montserrat', fontSize: '1.2rem', alignSelf: 'center' }}>
                        100% Orgánico
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {
                            //obteniendo la lista de botones navLinks
                            navLinks.map(item => (
                                <Button
                                    component={Link}
                                    color="inherit"
                                    key={item.title}
                                    to={item.path}
                                    sx={{ color: "black" }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                    </Box>
            </Toolbar>
            </AppBar>
            <Drawer
                //editando el drawer; abrirlo, posicionado a la izquierda, cerrar el drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>
        </>
    )
}

//estilos de la imagen
const styles = {
    backgroundImage: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -1,
      width: "100%",
      height: "auto",
    },
  };
  
  
  