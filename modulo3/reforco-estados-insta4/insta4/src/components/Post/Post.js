import React, { useState } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconePostBranco from '../../img/bookmark_border_black_24dp.svg'
import iconePostPreto from '../../img/bookmark_black_24dp.svg'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

const SavePost = styled.img`
	padding-left: 170px;
`

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [savePost, setSavePost] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);

  const onClickCurtida = () => {
     setCurtido(!curtido)  
     if (!curtido) { 
      setNumeroCurtidas(curtido + 1)
    } else {
      setNumeroCurtidas(curtido - 1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
    
  };


  const aoEnviarComentario = () => {
    setComentando(!comentando);
    setNumeroComentarios(numeroComentarios + 1);
  };

  const onClickSavePost = () => {
    setSavePost(!savePost)
  }

  let iconePost
  
  if (savePost) {
      iconePost = iconePostPreto
    } else {
      iconePost = iconePostBranco
    }


  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
    
  } else {
    iconeCurtida = iconeCoracaoBranco 
  }

  let componenteComentario;

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />;
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
        <SavePost alt={'icone'} src={iconePost} onClick={onClickSavePost}/>
		<p>{props.valorContador}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida} 
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  );
}

export default Post;
