import React, { useState } from 'react'
import { MainContainer, InputUsuario, InputConteudo, Enviar, BalaoDeMensagemEu, BalaoDeMensagemOutro } from './styles';


export default function Mensagem() {
  
// Inicializando o estado
    const [inputUser, setInputUser] = useState("")
    const [inputMsg, setInputMsg] = useState("")
    const [dado, setDado] = useState([])
  
    const onChangeInputUser = (e) => {
      setInputUser(e.target.value)
    }
    
    const onChangeInputMsg = (e) => {
      setInputMsg(e.target.value)
    }
  
// Tecla 'Enter' envia dados, oneKeyDown={function} nos inputs e button, no JSX;
    const pressEnterToSend = (e) => {
      if(e.keyCode === 13){
        adicionarInputs();
      }
    }
  
// onClik event e value 
    const  adicionarInputs = () => {
      const novoDado = {
        usuario: inputUser,
        mensagem: inputMsg
      }
  
      const novosDados = [...dado, novoDado ]
      
      setDado(novosDados)
  
// Resetar msg após enviar

      setInputMsg("")
      
    }



// Array de objetos do estado, mapeado para um componente
// Ou, no JSX tamplate string <p>{`${data.usuario}: ${data.mensagem}/// `}</p>
    const listaDeDadosMap= dado.map((data) => {
      let user = inputUser.toUpperCase();
      if( user === "EU") { 
      return <BalaoDeMensagemEu key={data}> {data.mensagem}</BalaoDeMensagemEu>
      } else {
        return (
          <BalaoDeMensagemOutro >
         <div>{data.usuario}</div>
         <div>{data.mensagem}</div>
         </BalaoDeMensagemOutro>
        )
      }
    })
  
    return (
      <MainContainer>
        <div>{listaDeDadosMap}</div>
        <InputUsuario 
          value={inputUser}
          onChange={onChangeInputUser}
          placeholder='Usuário'
          onKeyDown={pressEnterToSend}
        />
        <InputConteudo
          value={inputMsg}
          onChange={onChangeInputMsg}
          placeholder='Mensagem'
          onKeyDown={pressEnterToSend}
        />
        <Enviar 
          onClick={adicionarInputs}
          onKeyDown={pressEnterToSend}>
            Enviar
        </Enviar>
  
      </MainContainer>
    );
  }
  
