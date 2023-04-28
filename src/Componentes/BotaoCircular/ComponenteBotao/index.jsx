import React from 'react'
import styles from './ComponenteBotao.module.scss'

export default function ComponenteBotao() {
  return (
    <section className={styles.container}>
    <div className={styles.container__loader}>
      <span><i></i></span>
    </div>
    </section>
  )
}
