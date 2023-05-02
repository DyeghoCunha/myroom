
import styles from './Rodape.module.scss'
import '../../fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

import React from 'react'
import BotaoGenerico from '../Botoes/BotaoGenerico'

export default function Rodape() {
  const iconeLinkedin = <FontAwesomeIcon icon={faLinkedin}/>
  const linkLinkedin = 'https://www.linkedin.com/in/dyegho-cunha-aa4933b5/'
  const iconeGitHub = <FontAwesomeIcon icon={faGithub}/>
  const linkGitHub = 'https://www.linkedin.com/in/dyegho-cunha-aa4933b5/'
  const iconeWats =<FontAwesomeIcon icon={faSquareWhatsapp} />
  const linkWats = 'https://wa.me/554799110554'
  const iconeAlura =<FontAwesomeIcon icon={faCode} />
  const linkAlura = 'https://cursos.alura.com.br/vitrinedev/dyeghocunha'



  return (
    <footer className={`${styles.rodape} ${styles.position__fixed}`}>

      <section className={styles.container}>
     
      <BotaoGenerico icone={iconeLinkedin} link={linkLinkedin}/>
      <BotaoGenerico icone={iconeGitHub} link={linkGitHub}/>
      <BotaoGenerico icone={iconeWats} link={linkWats}/>
      <BotaoGenerico icone={iconeAlura} link={linkAlura}/>
      

      
      </section>

      

    </footer>
  )
}
