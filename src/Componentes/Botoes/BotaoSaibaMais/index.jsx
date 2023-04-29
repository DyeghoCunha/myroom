import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import styles from './BotaoSaibaMais.module.scss'
import { useLocation } from 'react-router-dom'





export default function BotaoSaibaMais(icone) {
  const localizacao = useLocation();
  return (
    <section className={styles.container}>

      <div className={styles.loader}>

        <div className={styles.rocket}>
        
         <FontAwesomeIcon icon={faImagePortrait}  className={`${styles.faRocket} `}/>
         
        
        </div>
        <div className={` ${styles.click} ${localizacao.pathname==='/sobremim' ? '' : styles.clickIn}`} ></div>
        <span><i></i></span>
      </div>
    </section>


  )
}
