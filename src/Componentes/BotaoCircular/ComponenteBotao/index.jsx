import React from 'react'
import styles from './ComponenteBotao.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

library.add(faRocket);

const estilo1 = { '--i': 0 };
const estilo2 = { '--i': 1 };
const estilo3 = { '--i': 2 };
const estilo4 = { '--i': 3 };
export default function ComponenteBotao() {
  return (

    <body>
      <div className={styles.loader}>

        <div className={styles.rocket}>

          <i><FontAwesomeIcon icon={faRocket} className={styles.faRocket} /></i>
          <i><FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={estilo1} /></i>
          <i><FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={estilo2} /></i>
          <i><FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={estilo3} /></i>
          <i><FontAwesomeIcon icon={faCloud} className={styles.faCloud} style={estilo4} /></i>

        </div>
        
        <span><i className={styles.loader__i}></i></span>
      </div>
    </body>
  )
}
