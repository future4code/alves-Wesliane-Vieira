import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const CardRegister = styled.div`
    padding: 20px; 
    background-color: orange; 

`;

export default class ScreenRegister extends React.Component {
    state = {
        name: "",
        email: ""
    }

// Função de eventos 

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

// Requisição de dados AXIOS
// .then(response) em caso de sucesso
// .catch(error) em caso de erro (com alert)

    signUp = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
                name: this.state.name,
                email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        })
        .then((response) => {
            alert("Usuário cadastrado!")
            this.setState({name:"", email:""})

        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    
// Input controlados, usar onChange
    render(){
        return(
            <div> 
                <button onClick={this.props.goToList}>Trocar de tela</button>
                <CardRegister> 
                <h1>Labenusers</h1>
                <h2> Cadastro </h2>
                <input placeholder={"nome"} onChange={this.state.handleName} />
                <input placeholder={"email"} onChange={this.state.handleEmail} />
                <button onClick={this.signUp}>Cadastrar</button>
                </CardRegister>            
            </div>
        )
    }
}