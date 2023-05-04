import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import styles from './Inicio.module.scss'
import Card from '../../Componentes/Card'
import posts from '../.././assets/json/posts.json'
import Formulario from '../../Componentes/Formulario'

export default function Inicio() {
  return (
    <>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Card post={post} />
          </li>
        ))}
      </ul>
            
      <Formulario />
    </>

  )
}
