import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Banner from 'Componentes/Banner'
import styles from './Inicio.module.scss'
import Post from 'Componentes/Post'
import posts from 'assets/json/posts.json'

export default function Inicio() {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>

            <Post post={post} />

          </li>
        ))}
      </ul>


    </main>
  )
}
