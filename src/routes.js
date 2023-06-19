import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cabecalho from "./componentes/Cabecalho";
import Contato from "./pages/Contato";

function AppRoutes() {
 return (
    <BrowserRouter>
    <Cabecalho/>
    <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
    </Routes>
    </BrowserRouter>
 )
}
export default AppRoutes;