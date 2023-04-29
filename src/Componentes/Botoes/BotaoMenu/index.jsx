import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import styles from './BotaoMenu.module.scss'
import './BotaoMenu.module.scss'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'



export default function BotaoMenu({icone}) {
  const localizacao = useLocation();
  
  return (

    <section className={styles.container}>

      <div className={styles.loader}>

        <div className={styles.rocket}>
        
         <FontAwesomeIcon icon={faHouse}  className={`${styles.faRocket} `}/>
        
        </div>
        <div className={` ${styles.click} ${localizacao.pathname==='/' ? '' : styles.clickIn}`} ></div>

        <span><i></i></span>

       
      </div>
      
    </section>


  )
}
