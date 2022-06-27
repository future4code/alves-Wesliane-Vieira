import React from "react"
import axios from "axios" 

export default class ToCreatePage extends React.Component {
    state = {
        name: "funkx"
        
    }
// Renderização ao abrir a pág
    componentDidMount() {
       this.createPlaylist()
    }
    
// Requisição deu error 400
    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }

        axios.post(url, body, {
            headers: {
                Authorization: "Wesliane-SilvaVieira-Alves"
            }
        } ).then((response) => {
            alert("Playlist criada!")
            this.setState({nome: ""})
        })
        .catch((error) => {
            alert(error.response.data)
            
        })
    }

    // Input Controlado. Passar value e onChange, relacionado-os ao state
    newPlaylist = (event) => {
        this.setState({name: event.target.value})
    }

    doRegister = () => {
        console.log(this.state.name)
    }

    render() {
        
        return (
            <div>
                <button onClick={this.props.goToDetailsPage}>Details</button>
                
                <h1>LABEFY - Crie e personalize sua playlist do jeitinho que desejar.</h1>
                <h3>Crie sua playlist:</h3>
                <input placeholder="Nome" value={this.state.name} onChange={this.newPlaylist} />
                <button onClick={this.doRegister}>Criar</button>
            </div>
        )
    }
}
  