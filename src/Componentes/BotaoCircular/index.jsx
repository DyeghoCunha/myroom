import React from 'react'
import styles from './BotaoCircular.module.scss'
import ComponenteBotao from './ComponenteBotao'

export default function BotaoCircular() {
  return (
    <button className={styles.container}>
      <ComponenteBotao/>
    </button>
  )
}
