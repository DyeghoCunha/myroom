import { useParams } from "react-router-dom";

import posts from '../../assets/json/posts.json'

import React from 'react'
import PostModelo from "../../Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.scss'



export default function Post() {

  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  })

  console.log(post)


  return (

    <PostModelo
      fotoCapa={`../../assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>

    </PostModelo>
  )
}
