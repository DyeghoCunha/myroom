import styles from './CampoTexto.module.scss'

import React, { useState } from 'react'

export default function CampoTexto({placeholder}) {

const [retorno, setRetorno] = useState('')


  return (

    <div className={styles.container}>
    <textarea
    className={styles.campoTexto}
    placeholder={placeholder}
    on onChange={(e)=> setRetorno(e.target.value)}
    value={retorno}
    />
    </div>
  )
}
