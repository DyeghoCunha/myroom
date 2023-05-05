import styles from './Banner.module.scss'
import circuloColorido from '../../assets/imagens/circulo_colorido.png'
import minhaFoto from '../../assets/imagens/minha_foto.png'

import React from 'react'

export default function Banner({titulo,texto}) {
  return (
    <div className={styles.banner}>
      
      <div className={styles.apresentacao}>

        <h1 className={styles.titulo}>
          {titulo}
        </h1>

        <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="" />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Dyegho Cunha" />

      </div>

        <p className={styles.paragrafo}>
          
          </p>
      </div>


    </div>
  )
}
