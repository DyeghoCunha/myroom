import styles from './CampoTexto.module.scss'

import React, { useState } from 'react'

export default function CampoTexto({placeholder, onInputChange}) {

const [retorno, setRetorno] = useState('')

const handleInputChange = (event) => {
  const newValue = event.target.value;
  setRetorno(newValue);
  onInputChange(newValue);
};
  return (

    <div className={styles.container}>
    <textarea
    className={styles.campoTexto}
    placeholder={placeholder}
    on onChange={handleInputChange}
    value={retorno}
    />
    </div>
  )
}
