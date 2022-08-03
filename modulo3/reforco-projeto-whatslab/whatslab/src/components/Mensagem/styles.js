import styled from "styled-components";

export const InputUsuario = styled.input`
  position: absolute;
  bottom: 1%;
  left: 1%;
  width: 10vw;
  height: 4vh;
  border-radius: 3px;
  border-color: green;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 89vh;
  border: 2px solid green;
  margin: 0 auto;
  align-items: left; 
  background: #ECFFE9;
  position: relative;
  top: 10%;
  
`

export const InputConteudo = styled.input`
  position: absolute;
  bottom: 1%;
  right: 12%;
  width: 40vw;
  height: 4vh;
  border-radius: 8px;
  border-color: green;
`
export const Enviar = styled.button`
  position: absolute;
  bottom: 1%;
  right: 1%;
  height: 5vh;
  width: 6vw;
`
export const BalaoDeMensagemEu = styled.div`
  background-color: white;   
  position: absolute;
  top: 4%;
  right: 2%;
  max-width: 30vw;
  min-width: 8vw;
  margin-bottom: 1em;
  word-wrap: break-word;
 
` 

export const BalaoDeMensagemOutro= styled.div`
  background-color: yellow;
  position: absolute;
  top: 4%;
  right: 2%;
  max-width: 30vw;
  min-width: 8vw;
  margin-bottom: 1em;
  word-wrap: break-word;
` 