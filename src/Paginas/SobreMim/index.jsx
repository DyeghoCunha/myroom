import React from 'react'
import BotaoFoguete from '../../Componentes/Botoes/Foguete'
import PaginaInicial from '../PaginaInicial'
import Banner from '../../Componentes/Banner'
import PostModelo from '../../Componentes/PostModelo'
import fotoCapa from '../../assets/imagens/sobre_mim_capa.jpeg'
import styles from './SobreMim.module.scss'
import fotoSobreMim from '../../assets/imagens/minha_foto.png'
import Formulario from '../../Componentes/Formulario'

export default function SobreMim() {
  return (
    <>
      <Banner titulo={'Sobre Mim!'} texto={'Meu nome'}/>

      <PostModelo titulo=''>
        <h3 className={styles.subtitulo}> Ola meu nome eh Dyegho</h3>

        {/* <img src={fotoSobreMim} alt="" className={styles.fotoSobreMim} /> */}

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere impedit, natus necessitatibus iusto eum delectus ad, neque perspiciatis harum animi, nesciunt quia error. Repudiandae provident assumenda repellat perferendis nostrum.
        </p>
        <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequuntur officiis, iure eos debitis accusantium. Voluptas, provident vitae assumenda perferendis distinctio voluptatem laboriosam nesciunt facilis, praesentium dicta laborum reprehenderit eius!
        </p>

        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui commodi perferendis voluptatibus sint unde voluptates, voluptatem magnam cupiditate deserunt nihil deleniti impedit quod recusandae laudantium dicta at voluptatum beatae?
        </p>
        <p className={styles.paragrafo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officia debitis maxime aliquid non nesciunt rem saepe, fugit dolores corporis nemo tenetur, fugiat, fuga vel. Magni, praesentium quam. Quae, architecto.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officia debitis maxime aliquid non nesciunt rem saepe, fugit dolores corporis nemo tenetur, fugiat, fuga vel. Magni, praesentium quam. Quae, architecto.
        </p>

        <p className={styles.paragrafo}>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officia debitis maxime aliquid non nesciunt rem saepe, fugit dolores corporis nemo tenetur, fugiat, fuga vel. Magni, praesentium quam. Quae, architecto.
        </p>
      </PostModelo>

      <BotaoFoguete />
      <Formulario />
    </>
  )
}
