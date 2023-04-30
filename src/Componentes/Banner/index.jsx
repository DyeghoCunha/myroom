import styles from './Banner.module.scss'
import circuloColorido from 'assets/imagens/circulo_colorido.png'
import minhaFoto from 'assets/imagens/minha_foto.png'

import React from 'react'

export default function Banner() {
  return (
    <div className={styles.banner}>
      
      <div className={styles.apresentacao}>

        <h1 className={styles.titulo}>
          My Room !!
        </h1>

        <p className={styles.paragrafo}>
          Olá, sou Dyegho Cunha, Desenvolvedor FullStack e Mobile.
          Formado em Tecnologia em Construção Naval e Contabilidade,
          encontrei na programação minha verdadeira paixão.
          Hoje, dedico-me a criar soluções para atender às necessidades e
          resolver problemas dos clientes. Busco constantemente aprender e
          aprimorar minhas habilidades para entregar resultados cada vez melhores.</p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="" />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Dyegho Cunha" />

      </div>
    </div>
  )
}
