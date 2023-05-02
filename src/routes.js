import './styles/estilosGlobais.scss';
import PaginaInicial from "./Paginas/PaginaInicial/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Menu from './Componentes/Menu';
import Banner from './Componentes/Banner';
import Rodape from './Componentes/Rodape';
import PaginaPadrao from './Componentes/PaginaPadrao';

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>

        <Route path='/' element={<PaginaPadrao />}>
          
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route index element={<Inicio />} />
        {/* 

        Na Rota "/" a Estrutura a ser renderizada eh:

        <PaginaPadrao>
          <Inicio/>
        </PaginaPadrao>

        Na Rota "/sobremim" a Estrutura a ser renderizada eh:

        <PaginaPadrao>
          <SobreMim/>
        </PaginaPadrao>
        
        */}

        <Route path="*" element={<div>Pagina Nao Encontrada</div>} />

      </Routes>

      <Rodape />

    </BrowserRouter>
  )
}


