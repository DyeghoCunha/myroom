import BotaoMenu from '../Botoes/BotaoMenu'
import styles from './Card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ post }) {


  return (

    <Link to={`/posts/${post.id}`}>
      <div className={`${styles.post} ${styles.loader}`}>

        <div className={styles.rocket}>

          <section className={styles.containerPost}>

            <img
              className={styles.capa}
              src={`/assets/posts/${post.id}/capa.png`}
              alt="Imagem de capa do Post" />

            <div className={styles.faixa}>
              <h2 className={styles.titulo}>{post.titulo}</h2>
              <button className={styles.botaoLer}>Ler</button>
            </div>

          </section>

          <div className={`${styles.faRocket} `}>
            <div className={styles.hover}></div>
            <span><i></i></span>
          </div>

        </div>

      </div>
    </Link>




  )
}
