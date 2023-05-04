import styles from './Formulario.module.scss'
import { useState } from 'react'

import React from 'react'
import FormularioCampo from './FormularioCampo'
import CampoTexto from './CampoTexto'
import BotaoGenerico from '../Botoes/BotaoGenerico'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

export default function Formulario() {


  const envelope = <FontAwesomeIcon icon={faEnvelope} />

  const [campoNome, setCampoNome] = useState('');
  const [campoEmail, setCampoEmail] = useState('');
  const [campoTexto, setCampoTexto] = useState('');
  const templateParams = {
    from_name: campoNome,
    message: campoTexto,
    email: campoEmail
  }

  const handleCampoNome = (newValue) => { setCampoNome(newValue); };
  const handleCampoEmail = (newValue) => { setCampoEmail(newValue); };
  const handleCampoTexto = (newValue) => { setCampoTexto(newValue); };




  function sendEmail() {
   
      emailjs.send("service_n51k2ni", "template_820k53t", templateParams, "AdMOqDF7scosItxcv")
        .then((response) => {
          console.log("Email Enviado", response.status, response.text)
          setCampoNome('')
          setCampoEmail('')
          setCampoTexto('')
        }, (erro) => {
          console.log("ERRO: ", erro)
        })
    }
 

  function handleSubmit(event) {
    event.preventDefault();
    console.log(campoNome)
    console.log(campoEmail)
    console.log(campoTexto)
    if (campoNome === "" || campoEmail === "" || campoTexto === "") {
      console.log("Ta vazio esta merda porra !")
      return
    } else {
      sendEmail();
    }
  }

  return (
    <section className={styles.container__formulario}>
      <div className={styles.container} action="">

        <form className={styles.formulario} onSubmit={handleSubmit}>

          <FormularioCampo placeholder={'Digite o Seu Nome'} onInputChange={handleCampoNome} />
          <FormularioCampo placeholder={'Digite o Seu E-mail'} onInputChange={handleCampoEmail} />
          <CampoTexto placeholder={'Escreva sua Mensagem'} onInputChange={handleCampoTexto} />
         
            
            <button className={styles.botao} type='submit'><BotaoGenerico icone={envelope} /></button>
          

        </form>

      </div>

    </section>
  )
  }
