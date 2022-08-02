import React, { useState } from 'react'
import Etapa1 from './pages/Etapas/Etapa1'
import Etapa2 from './pages/Etapas/Etapa2'
import Etapa3 from './pages/Etapas/Etapa3'
import Final from './pages/Etapas/Final'
import styled from 'styled-components'
import Header from './components/Header/Header'

const AppContainer = styled.div`
  background-color: #836FFF;
  padding: 1%;
  width: 100vw;
  height: 100vh;
`
const Card = styled.div`
  display: flex;
  justify-content: center; // alinhamento H
  align-items: center; //alinhamento V
  flex-direction: column;
  max-width: 40vw;
  min-height: 50vh;
  margin: 0 auto;
  transform: translate(0, -50%)
  max-width: 50vw;
  background: linear-gradient( 135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) );
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 32px;
  background-color: #836FFF;
   button {
    padding: 1em;
    background-color: #C0C0C0;
    font-weight: 500;
    margin: 20px;
    border-radius: 8px;
   }

   input {
    width: 25vw;
    background-color: #DCDCDC;
    border: 1px solid silver;
   }
` 


function App() {
  const [actualPage, setActualPage] = useState(1) 

  const goToNextEtapa = () => {
    setActualPage(actualPage + 1)
  }


  const renderEtapa = () => {
      switch (actualPage) {
    case 1:
      return <Etapa1 />
    case 2:
      return <Etapa2 />
    case 3:
      return <Etapa3 />
    case 4: 
        return <Final />
    default:
        return <div>Error. Page not found!</div>
  }
  }

  // Renderização curto circuito com o button no JSX.
  return (
    <AppContainer>
      <Header />
      <Card>
      <div>{renderEtapa()}</div> 
      { actualPage !== 4 && (<button onClick={goToNextEtapa}>Próxima etapa</button> )}
     </Card>
    </AppContainer>
  );
}

export default App;
