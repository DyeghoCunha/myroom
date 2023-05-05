import './styles/estilosGlobais.scss';
import PaginaInicial from "./Paginas/PaginaInicial/index";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Menu from './Componentes/Menu';
import Banner from './Componentes/Banner';
import Rodape from './Componentes/Rodape';
import PaginaPadrao from './Componentes/PaginaPadrao';
import Formulario from './Componentes/Formulario';
import Post from './Paginas/Post'
import NaoEncontrada from './Paginas/NaoEncontrada';


export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />
     
      <Routes>

        <Route path='/' element={<PaginaPadrao />}>

          <Route path="sobremim" element={<SobreMim />} />
          
        </Route>

        <Route index element={<Inicio />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>

      <Rodape />

    </BrowserRouter>
  )
}





{/* 

        Na Rota "/" a Estrutura a ser renderizada eh:

        <PaginaPadrao>
          <Inicio/>
        </PaginaPadrao>

        Na Rota "/sobremim" a Estrutura a ser renderizada eh:

        <PaginaPadrao>
          <SobreMim/>
        </PaginaPadrao> */}