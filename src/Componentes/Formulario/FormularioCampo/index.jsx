import styles from './FormularioCampo.module.scss'

import React, { useState } from 'react'

export default function FormularioCampo({placeholder}) {

const[retorno,setRetorno] = useState('')


console.log(retorno)
  return (

    <section className={styles.container}>
      
    <input
     className={styles.input}
     type='text'
     placeholder={placeholder}
     onChange={(e)=> setRetorno(e.target.value)}
     value={retorno}
    />
    </section>


  )
}
