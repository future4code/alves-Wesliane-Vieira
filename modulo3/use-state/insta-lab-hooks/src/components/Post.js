import React, { useState} from "react";

function Post(props) {
  const [ curtido, setCurtido] = useState(false)
  const [ numeroCurtidas, setNumeroCurtidas ] = useState(0)
  const [ comentando, setComentando ] = useState(false)
  const [ numeroComentarios, setNumeroComentarios] = useState(0)
  const [ comentarios, setcomenterios ] = useState(["Oi"])
  const [ inputValue, setInputValue ] = useState(0)

  
  const onClickCurtida = () => {
    setCurtido(curtido + 1)
  };[setCurtido(curtido - 1)]

  
  const onClickComentario = () => {
    setComentando(comentando)
  };

 
  const onChangeComentario = (event) => {
    setInputValue(inputValue)
  };


  const enviarComentario = (comentario) => {
    setComentario(comentario)
  };

  {comentando}
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {onChangeComentario}
      <input
        id={"comentario"}
        value={""}
      />
      {enviarComentario}
      <button >Enviar</button>
    </>
  ) : (
 
    <>Lógica de exibir lista de comentarios</>
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
         <p>{comentario}</p>
         </div>
       )
     })
  

  return (
    <main>
      <header>
        <figure>
          {fotoUsuario}
          <img src={"https://picsum.photos/50/50"} alt={'Imagem do usuario'} />
          <span>{ nomeUsuario }</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {fotoPost}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={"https://picsum.photos/200/150"} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {numeroCurtidas}
          <span>Número de curtidas: 0</span>
          {onClickCurtida}
          <button >
            {curtido}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {numeroComentarios}
          <span>Número de comentários: 0</span>
          {onClickComentario}
          <button >
            {comentando}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;