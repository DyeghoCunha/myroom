import React from 'react'
import styles from './Menu.module.scss'
import { Link, useLocation } from 'react-router-dom'
import BotaoMenu from '../Botoes/BotaoMenu'
import BotaoSaibaMais from '../Botoes/BotaoSaibaMais'
import MenuLink from '../MenuLink'


export default function Menu() {
  const localizacao = useLocation();
  console.log(localizacao)

  return (
    <header>
      <nav className={styles.navegacao}>
        
          <MenuLink to={"/"} >{/* Esta Alterado para os Meus Icones */}
            <BotaoMenu/>
          </MenuLink>

          <MenuLink to={"/sobremim"}>{/* Esta Alterado para os Meus Icones */}
            <BotaoSaibaMais/>
          </MenuLink>
        
          
        
      </nav>
    </header>
  )
}
