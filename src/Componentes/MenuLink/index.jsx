import styles from './MenuLink.module.scss'
import { Link, useLocation } from 'react-router-dom'
import BotaoMenu from '../Botoes/BotaoMenu'


import React from 'react'

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  return (

    <Link className={`${styles.link} 
    ${localizacao.pathname === to ? styles.linkDestacado : ''}`} to={to}>
      {children}
    </Link>


  )
}
