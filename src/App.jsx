import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InboxIcon from "@mui/icons-material/Inbox";
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import AcercaDe from "./pages/AcercaDe";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
/**lista de botones */

const navLinks = [
  {
    title: "Inicio", path: "/", icon: <HomeRoundedIcon />
  },
  {
    title: "Catalogo", path: "Catalogo", icon: <StoreRoundedIcon />
  },
  {
    title: "Acerca de", path: "AcercaDe", icon: <GroupsRoundedIcon />
  },
  {
    title: "Contacto", path: "Contacto", icon: <InboxIcon />
  },
]

export function App() {

  return (
    <>
      <Navbar navLinks={navLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="AcercaDe" element={<AcercaDe />} />
          <Route path="Catalogo" element={<Catalogo />} />
          <Route path="Contacto" element={<Contacto />} />
        </Routes>
      </Container>
    </>
  );
}

export default App
