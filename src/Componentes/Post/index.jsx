import styles from './Post.module.scss'

import React from 'react'

export default function Post({ post }) {
  return (
    <div className={`${styles.post} ${styles.loader}`}>

        <div className={styles.rocket}>

          <div className={`${styles.faRocket} `}> 
          <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} 
          alt="Imagem de capa do Post" />
          </div>
        </div>

        <div className={` ${styles.click}`} >

          <div className={styles.iconeOff}></div>
        </div>

        <span><i></i></span>


      </div>

  
  )
}
