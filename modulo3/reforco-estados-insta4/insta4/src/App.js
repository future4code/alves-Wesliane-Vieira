import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Paula"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post
        nomeUsuario={"Miriã"}
        fotoUsuario={"https://picsum.photos/50/50?grayscale"}
        fotoPost={"https://picsum.photos/200/150?grayscale"}
      />
      <Post
        nomeUsuario={"Anne"}
        fotoUsuario={"https://picsum.photos/50/50?blur"}
        fotoPost={"https://picsum.photos/200/150?blur"}
      />
    </MainContainer>
  );
}

export default App;
