import React from 'react';
import styled from 'styled-components'

import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Fernanda'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post2
          nomeUsuario2={'Miriã'}
          fotoUsuario2={'https://picsum.photos/50/50?grayscale'}
          fotoPost2={'https://picsum.photos/200/150?grayscale'}
        />
        <Post3
        nomeUsuario3={'Marina'}
        fotoUsuario3={'https://picsum.photos/50/50?blur=1'}
        fotoPost3={'https://picsum.photos/200/150?blur=1'}
        />
      </MainContainer>
    );
  }
}

export default App;
