import React from 'react'

import styles from './BotaoGenerico.module.scss'
import './BotaoGenerico.module.scss'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';



export default function BotaoGenerico({ icone , link }) {
  const localizacao = useLocation();

  return (

    <a href={link} className={styles.container}>
      
      <div className={styles.loader}>

        <div className={styles.rocket}>
          <div className={`${styles.faRocket} `}>{icone}</div>
        </div>

        <div className={` ${styles.click} ${localizacao.pathname === '/' ? '' : styles.clickIn}`} >
        <div className={styles.iconeOff}>{icone}
        </div>
        </div>

        <span><i></i></span>


      </div>

    </a>


  )
}
