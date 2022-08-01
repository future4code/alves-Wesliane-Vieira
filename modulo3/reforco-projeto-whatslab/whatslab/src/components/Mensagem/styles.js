import styled from "styled-components";


export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 45vw;
  height: 85vh;
  margin: 0 auto;
  border: 2px solid black;
  background: #ECFFE9;
  box-sizing: border-box;
`

export const MenssagensContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: auto; //add scroll nas msgs 
   
`
export const BalaoDeMensagem = styled.div`
  margin: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
  display: flex;
  background-color: white;
  align-self: center; 
  max-width: 30vw;
  min-width: 5vw;
  word-break: break-word; //quebra linha
  padding: 0.8em 0.7em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3; //espaço entre linhas
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2); //add profundidade
  position: relative;

  
    &:after {
      //triângulo na ponta 
	    content: '';
	    border: 15px solid transparent;
	    border-top-color: white;
      //posicionando triângulo
      position: absolute;
      top: 0px;
      right: -10px
  }
`

export const UsuarioContainer = styled.div`
    color: green;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;

`


export const InputsContainer = styled.div`
  display: flex;
  width: 45vw;
  
  
`
export const InputUsuario = styled.input`
  width: 6vw;
  border-radius: 5px;
  margin: 0.6rem;
  
`
export const InputConteudo = styled.input`
  flex-grow: 1;
  border-radius: 5px;
  margin: 0.6rem;
`
export const Enviar = styled.button`
  margin: 1rem;
  box-sizing: border-box;
  text-align: center;
  background-color: greenyellow;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  
  
`

