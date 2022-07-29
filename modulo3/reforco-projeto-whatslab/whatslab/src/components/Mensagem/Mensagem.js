import React, { useState } from 'react'
import { Container, Input } from './styles';

function Mensagem() {
  
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

// Tecla 'Enter' envia dados, oneKeyDown={function} nos inputs e button no JSX;
  const pressEnterToSend = (e) => {
    if(e.keyCode === 13){
      onCickAdicionarInputs();
    }
  }
  
  const  onCickAdicionarInputs= () => {
    const novoDado = {
      usuario: inputUser,
      mensagem: inputMsg
    }

    const novosDados = [...dado, novoDado ]
    
    setDado(novosDados)

// Resetar inputs após enviar
    setInputUser("")
    setInputMsg("")
   } 


// Array de objetos do estado, mapeado para um componente
// Ou, no JSX tamplate string <p>{`${data.usuario}: ${data.mensagem}/// `}</p>
  const listaDeDadoMap= dado.map((data) => {
    return <p>{data.usuario}: {data.mensagem}</p>
  })

  return (
    <Container>
      <p>{listaDeDadosMap}</p>
      <Input 
        value={inputUser}
        onChange={onChangeInputUser}
        placeholder='Usuário'
        onKeyDown={pressEnterToSend}
      />
      <Input 
        value={inputMsg}
        onChange={onChangeInputMsg}
        placeholder='Mensagem'
        onKeyDown={pressEnterToSend}
      />
      <button 
        onClick={onCickAdicionarInputs}
        onKeyDown={pressEnterToSend}>
          Enviar
      </button>

    </Container>
  );
}

export default Mensagem;