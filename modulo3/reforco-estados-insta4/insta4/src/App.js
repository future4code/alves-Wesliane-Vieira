import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import useState from 'react'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [posts, setPosts] = useState([
    {
      nomeUsuario: "Paula",
      fotoUsuario:"https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Miriã",
      fotoUsuario: "https://picsum.photos/50/50?grayscale",
      fotoPost: "https://picsum.photos/200/150?grayscale"
    },
    {
      nomeUsuario:"Anne",
      fotoUsuario: "https://picsum.photos/50/50?blur",
      fotoPost: "https://picsum.photos/200/150"
    }

  ])
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")
  
  const  adicionarPost= () => {
    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
    }

  const novosPosts = [...posts, novoPost]

  setPosts(novosPosts)
   } 

  const onChangeInputNomeUsuario = (e) => {
    setInputNomeUsuario(e.target.value)
  }

  const onChangeInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value)
  }

  const onChangeIputFotoPost = (e) => {
    setInputFotoPost(e.target.value)
  }
  const listaDePosts = posts.map((post) => {
    return <div>
      <p>{post.nomeUsuario}</p>
      <p>{post.fotoUsuario}</p>
      <p>{post.fotoPost}</p>
      </div>  
 })

 return (
    <MainContainer>
      <Post>{listaDePosts}</Post>
      <input 
        placeholder="Nome:"
        value={inputNomeUsuario}
        onChange={onChangeInputNomeUsuario}
      />
      <input 
        placeholder="Foto do perfil:"
        value={inputFotoUsuario}
        onChange={onChangeInputFotoUsuario}
      />
      <input 
        placeholder="Post:"
        value={inputFotoPost}
        onChange={onChangeIputFotoPost}
      />
      <button onClick={adicionarPost}>Adicionar!</button>
    </MainContainer>
  );
  
}

export default App;
