import styles from './PostModelo.module.scss'

import React from 'react'

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContaier}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}>
      </div>

      <h2 className={styles.titulo}>
        {titulo}
      </h2>

      <div className={styles.postConteudoContainer}>{children}
      </div>
    </article>
  )
}
