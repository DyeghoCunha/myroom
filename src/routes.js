import './styles/estilosGlobais.scss';
import PaginaInicial from "./Paginas/PaginaInicial/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Menu from './Componentes/Menu';
import Banner from './Componentes/Banner';
import Rodape from 'Componentes/Rodape';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      
      
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="*" element={<div>Pagina Nao Encontrada</div>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  )
}


