import React from 'react'
import styles from './Menu.module.scss'
import { Link, useLocation } from 'react-router-dom'
import BotaoMenu from '../Botoes/BotaoMenu'
import BotaoSaibaMais from '../Botoes/BotaoSaibaMais'
import MenuLink from '../MenuLink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHome } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
  const iconeHome = <FontAwesomeIcon icon={faHome}/>
  const iconeSaibaMais = <FontAwesomeIcon icon={faAddressCard} />

  const localizacao = useLocation();
  console.log(localizacao)

  return (
    <header>
      <nav className={styles.navegacao}>
        
          <MenuLink to={"/"} >{/* Esta Alterado para os Meus Icones */}
            <BotaoMenu  icone={iconeHome}/>
           {/*  Home */}
          </MenuLink>

          <MenuLink to={"/sobremim"}>{/* Esta Alterado para os Meus Icones */}
            <BotaoSaibaMais icone={iconeSaibaMais}/>
            {/* SobreMim */}
          </MenuLink>
        
          
        
      </nav>
    </header>
  )
}
