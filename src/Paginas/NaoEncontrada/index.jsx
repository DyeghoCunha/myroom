import BotaoFoguete from '../../Componentes/Botoes/Foguete'
import styles from './NaoEncontrada.module.scss'
import erro404 from '../../assets/imagens/erro_404.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {

const navegar = useNavigate();

  return (
    <div className={styles.conteudoContainer}>
      <span className={styles.texto404}>404</span>
      <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
      <p className={styles.paragrafo}>Tem certeza de que era isso que você estava Procurando?</p>
      <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a pagina anterior</p>

      <div 
      className={styles.botaoContainer}
      onClick={()=>navegar(-1)}>
        <button>
          <BotaoFoguete/>
          </button>
      </div>

      {/* <img 
      className={styles.imagemCachorro}
      src={erro404}  />
 */}
    </div>
  )
}
