import styles from './Formulario.module.scss'

import React from 'react'
import FormularioCampo from './FormularioCampo'
import CampoTexto from './CampoTexto'
import BotaoGenerico from '../Botoes/BotaoGenerico'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Formulario() {
const envelope = <FontAwesomeIcon icon={faEnvelope} />

function sendEmail(e){

  e.preventDefault();

}


  return (
  <section className={styles.container__formulario}>
    <div  className={styles.container} action="">
      

      <form className={styles.formulario} onSubmit={sendEmail}>

      <FormularioCampo placeholder={'Digite o Seu Nome'}/>
    
      <FormularioCampo placeholder={'Digite o Seu E-mail'}/>
      <CampoTexto placeholder={'Escreva sua Mensagem'}/>
      <div  className={styles.botao}>
      <BotaoGenerico icone={envelope} link=''/>
      </div>

      </form>

    </div>
  </section>   
  )
}
