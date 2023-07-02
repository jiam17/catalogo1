/* eslint-disable react/prop-types */
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


export default function Navbar({ navLinks }) {
    //estado para mantener cerrado el button 
    const [open, setOpen] = useState(false)

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        FourLunas
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