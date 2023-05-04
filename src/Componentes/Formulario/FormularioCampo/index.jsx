import styles from './FormularioCampo.module.scss'

import React, { useState } from 'react'

export default function FormularioCampo({placeholder,onInputChange}) {

const[retorno,setRetorno] = useState('');

const handleInputChange = (event) => {
  const newValue = event.target.value;
  setRetorno(newValue);
  onInputChange(newValue);
};


  return (

    <section className={styles.container}>
      
    <input
     className={styles.input}
     type='text'
     placeholder={placeholder}
     onChange={handleInputChange}
     value={retorno}
    />
    </section>


  )
}
