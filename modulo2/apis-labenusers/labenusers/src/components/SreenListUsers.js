import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUser = styled.div`
    border: 1px solid grey;
    padding: 10px; 
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;

    h2, button {
        background-color: orange; 
    }

    
`;

export default class ScreenListUsers extends React.Component {
    state = {
        users: []
    }

// Com componentDidMount assim que a tela renderizar ele executa o axios getAllUsers

    componentDidMount() {
        this.getAllUsers()
    }

// Axios para pegar a lista de todos os usuários 

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        })
        .then((res) => {
            this.setState({users: res.data})
        })
        .catch((err) => {
          console.log(err)

        })
    }

// Axios para deletar usuários 

    deleteUser = (id) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
        
        axios.delete(url, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.getAllUsers()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
    })
    }

// Transformar lista de obj em card de usuários com map()
// Transformar lisra de uma coisa em lista de outra coisa use map()

// Usar key no styled-components para otimizar o react
    render() {
    
    const listUsers = this.state.users.map((user) => {
            return <CardUser key={user.id}> 
                    {user.name} 
                    </CardUser>
        })
        
        return(
            <div>
                <button onClick={this.props.goToRegister}>Trocar de tela</button>
                <h2>Lista de Cadastro</h2>
                    {listUsers}
                    <button onClick={() => this.deleteUser()}>X</button>
            </div>
        )
    }
} 
